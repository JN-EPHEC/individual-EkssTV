import express from 'express';
import userRoutes from './routes/userRoutes.js';
import sequelize from './config/database.js';

//Constantes
const app = express();
const port = 3000;

///Redirection de request
app.use('/api/users',userRoutes)

/// RACINE
app.get('/',(req : object,res:object) => {
    res.send('Salut c\'est jhonny Bienvenu sur mon API');
    console.log(typeof(req),typeof(res));
});
///Dans la console
    app.listen(port, () => {
        console.log(`Serveur lancé sur http://localhost:${port}`);
    });
    /// Connection test for sqlite and Sequelize
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
/// Exo du TP1
    app.get('/api/data',(req,res) => {
        res.json(etudiants);
    });

    const etudiants = [
    { id: 1, nom: "Dupont", prenom: "Jean" },
    { id: 2, nom: "Martin", prenom: "Sophie" },
    { id: 3, nom: "Doe", prenom: "John" },
    ];

    app.get('/api/hello/:name',(req,res) => {
        let name = req.params.name;
        let date = new Date();
        let data = { message: `Bonjour ${name}`, timestamp: date};
        res.json(data);
    });
/*let message = greet('Yuqi');
console.log(message);
function greet(name: string): string {
    return 'Salut ' + name ;
};
*/
