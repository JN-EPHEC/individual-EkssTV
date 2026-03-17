import express from 'express';
import type { Request,Response } from "express";
import userRoutes from './userRoutes.js';
import apiGroupes from './apiGroupes.js';
const router = express.Router()
//Racine
router.get("/", (req : Request,res:Response) => {
    res.send('Salut c\'est jhonny Bienvenu sur mon API');
    console.log(typeof(req),typeof(res));
});
//Redirection
router.use('/users',userRoutes);
router.use('/groupes',apiGroupes);
export default router;