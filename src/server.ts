import express from 'express';
import apiRoutes from './routes/apiRoutes.js';
import sequelize from './config/database.js';
import "./models/Users.js";
//Constantes
const app = express();
const port = 3000;
// Pour paser le JSON, pour que Express parse le req en jspn
app.use(express.json());
///Redirection de request
app.use('/',apiRoutes)

///Dans la console
    
    /// Connection test for sqlite and Sequelize
    try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
        ///Syncronisation des tables (model)
        try {
            await sequelize.sync()
            console.log('la syncro est done')
            /// Lancement du Serveur
            app.listen(port, () => {
                console.log(`Serveur lancé sur http://localhost:${port}`);
            });
        } catch (error){
            console.error('La syncro a foiré')
        }
    } catch (error) {
    console.error('Unable to connect to the database:', error);
    }

