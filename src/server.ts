import express from 'express';
import apiRoutes from './routes/apiRoutes.js';
import sequelize from './config/database.js';
import apiGroupes from './routes/apiGroupes.js';
import {requestLogger} from './middlewares/logger.js'
import { ErrorHandler } from './middlewares/errorHandler.js';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger.js';

//Constantes
const app = express();
const port = 3000;

// Pour paser le JSON, pour que Express parse le req en json
app.use(express.json());
// Pour utiliser le logger 
app.use(requestLogger);

//Pour pouvoir utiliser SwaggerUi 
app.use("/api-docs", swaggerUi.serve,swaggerUi.setup(swaggerSpec));
///Redirection de request
app.use('/api',apiRoutes);
app.use('/',express.static('public'));
//DEVOIR 1
app.use('/api/groupes',apiGroupes);
app.use('/groupes',express.static('public/groupes'));

//Apres toute les routes le errorhandler pour gerer les erreurs
app.use(ErrorHandler);
///Dans la console
    
    /// Connection test for sqlite and Sequelize
    try {
        sequelize.authenticate();
        console.log('Connection has been established successfully.');
            ///Syncronisation des tables (model)
            try {
                sequelize.sync()
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

