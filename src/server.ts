import express from 'express';
const etudiants = [
{ id: 1, nom: "Dupont", prenom: "Jean" },
{ id: 2, nom: "Martin", prenom: "Sophie" },
{ id: 3, nom: "Doe", prenom: "John" },
];
function greet(name: string): string {
    return 'Salut ' + name ;
};

let message = greet('Yuqi');
console.log(message);

const app = express();
const port = 3000;

const usersRoutes = require('./routes/userRoutes.ts')

app.use('/api/users',usersRoutes)


app.get('/',(req : object,res:object) => {
    res.send('Salut c\'est jhonny Bienvenu sur mon API');
    console.log(typeof(req),typeof(res));
});

app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});

app.get('/api/data',(req,res) => {
    res.json(etudiants);
});

app.get('/api/hello/:name',(req,res) => {
    let name = req.params.name;
    let date = new Date();
    let data = { message: `Bonjour ${name}`, timestamp: date};
    res.json(data);
});
