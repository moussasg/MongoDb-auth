import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// Parser pour les requêtes JSON
app.use(bodyParser.json());

// Route pour la réception des données de formulaire
app.post('/api/users', (req, res) => {
  const { name, email, password } = req.body;

  //// ici pour envoyé vers atlas
  console.log(`Nom: ${name}, Email: ${email}, Mot de passe: ${password}`);
  res.json({ message: 'Données de formulaire reçues avec succès' });
});

// Middleware pour les requêtes OPTIONS
app.options('*', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.status(200).end();
});

// Middleware pour les requêtes CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Démarrage du serveur
app.listen(4000, () => {
  console.log('Serveur démarré sur le port 3000');
});
