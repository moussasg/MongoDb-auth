import express from 'express';
// Express est un framework web pour Node.js qui permet de créer des applications web et des APIs 
import bodyParser from 'body-parser'; //bibliothèque middleware pour Express.js qui permet de récupérer 
/// les données envoyées dans le corps d'une requête HTTP.
import mongoose from 'mongoose'; //  bibliothèque JavaScript  fournit 
// interface d'abstraction pour travailler avec MongoDB dans Node.js
const app = express();
// Parser for JSON requests
app.use(bodyParser.json());
// Route for receiving form data
app.post('/api/users', async (req, res) => {
  const { name, email, password } = req.body;
  try { // 1Yzsk2SKlJMxbSgW password jbto mmongodbatlas
    // Connect to the database /// moussasouagg = username jbtha ma mongodbatlas / 
    await mongoose.connect('mongodb+srv://moussasouagg:1Yzsk2SKlJMxbSgW@cluster0.lnp5clj.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const userSchema = new mongoose.Schema({
      name: String,
      email: String,
      password: String,
    });
    const User = mongoose.model('users', userSchema);
    // Insert the data into the "users" collection
    const user = new User({ name, email, password });
    await user.save();
    console.log(`Data inserted into "users" collection with ID ${user._id}`);
    res.json({ message: 'Form data saved successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).send('Error inserting data into database');
  } finally {
    mongoose.disconnect();
  }
  console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
});
// Middleware for CORS requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
// Start the server
app.listen(4000, () => {
  console.log('Server started on port 4000');
});
