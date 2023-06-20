import express from 'express';
const app = express();
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors';
app.use(cors())
import bodyParser from 'body-parser';// framework express
app.use(express.urlencoded({ extended: true })) // pour prendre en charge les données de formulaire envoyées depuis votre formulaire React :
app.use(bodyParser.json());
import mongoose from 'mongoose';
// Connect to the database
mongoose.connect(process.env.DBU , {
  useNewUrlParser: true,
}) 
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.log('Unable to connect to the database', error);
  });
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const User = mongoose.model('User', userSchema); // req data sent to the api
app.post('/api/users/', async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = new User({ email, password });
    await newUser.save();
    res.json({ success: true });
    console.log(` email :${email} , password : ${password} / inserted into "test"  collection with ID ${newUser._id}`);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Erreur lors de l'insertion de l'utilisateur" });
  }
});
app.get('/api/users/', async (req, res) => {
  const { email, password } = req.query;
  try {
    const user = await User.findOne({ email, password });
    res.json({ exists: user !== null });
  } catch (err) {
    console.error("Une erreur s'est produite lors de la vérification de l'utilisateur", err);
    res.status(500).json({ error: "Erreur lors de la vérification de l'utilisateur" });
  }
});

// Autres routes...
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.listen(3001, () => {
  console.log('Server started on port 3001');
});
