import dotenv from 'dotenv'
dotenv.config() /// fichier .env pour cahcé mdp de database
import express from 'express'; // framework de node.js gére les requêtes et les réponses HTTP , facilite création de serveur web
import bodyParser from 'body-parser';//bibliothèque middleware pour Express.js pour 
///récupérer les données envoyées dans le corps d'une requête HTTP et le transformer en objet 
import mongoose from 'mongoose'; /// driver de mongodb dans node.js pour définir des shémas pour faciliter les opération qui travaille avec node.js
const app = express(); 
app.use(bodyParser.json());
// Connect to the database 
mongoose.connect(process.env.Dburi, {  // Dburi uri de dabatase défini dans fichier .env
useNewUrlParser: true }
)
.then(() => {
  console.log('Connected to database');
})
.catch((error) => {
  console.log('Unable to connect to database', error);
})
// Define the userschema ndiroh aprés dakhel model 
const userSchema = new mongoose.Schema({ 
  email: String,
  password: String,
});
let User; // User = Modéle
User = mongoose.model('User', userSchema);
// Route for receiving form data , pour insérer les données dans la collectoin
app.post('/api/accounts', async (req, res) => { // accounts = la collection  généré automatique collection "users" dans MongoDB Atlas.
  const { email, password } = req.body; ///  req = {l'objet} représentant la requête HTTP
  try { // req.body pour accéder à des données envoyé dans une requette 
    const user = new User({email, password });
    await user.save();
    console.log(` email :${email} , password : ${password} / inserted into "accounts" collection with ID ${user._id}`);
    res.json({ message: 'Form data saved successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).send('Error inserting data into database');
  } } )
  /// get all accounts
  app.get('/api/accounts', async (req, res) => {
    try {
      const accounts = await User.find({});
      res.json(accounts);
    } catch (error) {
      console.log(error);
      res.status(500).send('Error getting accounts');
    }
  });
  // Route to get specific id
  app.get('/api/accounts/:id', async (req, res) => {
    try { /// req.params contient les paramètres extraits de l'URL de la requête
      const user = await User.findById(req.params.id);
      if (!user) {
        res.status(404).send('User not found');
        return;
      }
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).send('Error retrieving data from database');
    }
  });
  app.delete('/api/accounts/:id', async (req, res) => {
    const userId = req.params.id;
    try {
      const deletedUser = await User.findByIdAndDelete(userId);
      if (deletedUser) {
        res.json({ message: `User with ID ${userId} deleted successfully` });
      } else {
        res.status(404).json({ message: `User with ID ${userId} not found` });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send('Error deleting user from database');
    }
  });
// Start the server
app.listen(5000, () => {
  console.log('Server started on port 3001');
});
///
// Middleware for CORS requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});