const express = require('express');
const app = express();

app.use(express.json()); // Pour parser les données JSON du body

let userData = []; // Tableau pour stocker les données des utilisateurs

// Route POST pour recevoir les données du formulaire
app.post('/api/process', (req, res) => {
    console.log("Requête POST reçue");
    const { name, phone } = req.body;
    console.log(`Données reçues - Nom: ${name}, Téléphone: ${phone}`);

    if (!name || !phone) {
        console.log("Données manquantes");
        return res.status(400).json({ message: 'Nom et numéro sont requis.' });
    }

    userData.push({ name, phone });
    console.log("Données stockées :", userData);
    res.json({ message: `Nom: ${name}, Téléphone: ${phone}` });
});

// Route GET pour afficher les utilisateurs enregistrés
app.get('/api/users', (req, res) => {
    console.log("Requête GET reçue pour /api/users");
    res.json(userData);
});

// Écouter sur un port (optionnel selon ta configuration Vercel)
app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});
