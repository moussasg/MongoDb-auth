import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
const app = express();
app.use(bodyParser.json());
// Connect to the database
mongoose.connect('mongodb+srv://moussasouagg:1Yzsk2SKlJMxbSgW@cluster0.lnp5clj.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Define the user schema and model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
let User;
try {
  User = mongoose.model('users');
} catch {
  User = mongoose.model('users', userSchema);
}
// Route for receiving form data
app.post('/api/users', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    console.log(`Data inserted into "users" collection with ID ${user._id}`);
    res.json({ message: 'Form data saved successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).send('Error inserting data into database');
  }
});
// Middleware for CORS requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
// Start the server
app.listen(3001, () => {
  console.log('Server started on port 3001');
});
