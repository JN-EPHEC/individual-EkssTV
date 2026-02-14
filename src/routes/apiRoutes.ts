import express from 'express';
import userRoutes from './userRoutes.js';
import etudiantRoutes from './etudiantRoutes.js';
import apiHello from './apiHello.js';
const router = express.Router()
//Racine
router.get("/", (req : object,res:object) => {
    res.send('Salut c\'est jhonny Bienvenu sur mon API');
    console.log(typeof(req),typeof(res));
});
//Redirection
router.use('/api/users',userRoutes);
router.use('/api/data',etudiantRoutes);
router.use('/api/hello',apiHello)
export default router;