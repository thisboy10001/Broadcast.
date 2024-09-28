import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

let userData = []; // Tableau pour stocker les données

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route pour traiter le formulaire
app.post('/api/process', (req, res) => {
    const { name, phone } = req.body;
    console.log(`Données reçues - Nom: ${name}, Numéro de téléphone: ${phone}`); // Log des données reçues

    if (!name || !phone) {
        return res.status(400).json({ message: 'Nom et numéro sont requis.' });
    }

    userData.push({ name, phone }); // Ajouter les données au tableau
    console.log("Données stockées :", userData); // Afficher les données stockées
    res.json({ message: `Nom: ${name}, Numéro de téléphone: ${phone}` });
});

// Route pour afficher les utilisateurs
app.get('/api/users', (req, res) => {
    console.log("Utilisateurs actuels:", userData); // Log des utilisateurs stockés
    res.json(userData); // Retourner les données stockées
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});

// Exporter la fonction pour Vercel
export default app;
