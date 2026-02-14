import express from 'express';
    const etudiants = [
    { id: 1, nom: "Dupont", prenom: "Jean" },
    { id: 2, nom: "Martin", prenom: "Sophie" },
    { id: 3, nom: "Doe", prenom: "John" },
    ];

const router = express.Router();

    router.get('/',(req,res) => {
        res.json(etudiants);
    });

export default router;