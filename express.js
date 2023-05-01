import dotenv from 'dotenv'
dotenv.config()
import express from 'express'; // framework de node.js gére les requêtes et les réponses HTTP , facilite création de serveur web
import bodyParser from 'body-parser'; //  bibliothèque middleware pour Express.js pour 
///récupérer les données envoyées dans le corps d'une requête HTTP et le transformer en objet 
import mongoose from 'mongoose'; /// driver de mongodb dans node.js pour définir des shémas pour faciliter les opération qui travaille avec node.js
const app = express(); /// cluster0.lnp5clj.mongodb.net nom de cluster
app.use(bodyParser.json()); // 1Yzsk2SKlJMxbSgW c le mdp sur database atlas
// Connect to the database // moussasouagg c le username de database sur atlas 
mongoose.connect( process.env.Db_Connection , {
  useNewUrlParser: true,
}).then(() => {
  console.log('Connected to database');
}).catch((error) => {
  console.log('Unable to connect to database', error);
})
// Define the userschema ndiroh aprés dakhel model 
const userSchema = new mongoose.Schema({ 
  name: String,
  email: String,
  password: String,
});
let User;
User = mongoose.model('User', userSchema);
// Route for receiving form data pour que la méthode post marche
app.post('/api/users', async (req, res) => { // users = collection
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    console.log(`name :  ${name} , email :${email} , password : ${password} / inserted into "users" collection with ID ${user._id}`);
    res.json({ message: 'Form data saved successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).send('Error inserting data into database');
  } } )
  /// get all users
  app.get('/api/users', async (req, res) => {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).send('Error getting users');
    }
  });
  // Route to get specific id
  app.get('/api/users/:id', async (req, res) => {
    try {
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
  app.delete('/api/users/:id', async (req, res) => {
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
app.listen(3001, () => {
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
