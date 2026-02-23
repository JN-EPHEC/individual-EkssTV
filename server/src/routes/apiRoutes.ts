import express from 'express';
import userRoutes from './userRoutes.js';
import apiGroupes from './apiGroupes.js';
const router = express.Router()
//Racine
router.get("/", (req : object,res:object) => {
    res.send('Salut c\'est jhonny Bienvenu sur mon API');
    console.log(typeof(req),typeof(res));
});
//Redirection
router.use('/users',userRoutes);
router.use('/groupes',apiGroupes);
export default router;