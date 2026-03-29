import express from "express";
import type { Request,Response } from "express";
import { basicAuth } from "../middlewares/basicAuth";
const router = express.Router();
/**
* @swagger
* /api/admin/basic:
*   get:
*       summary: Route admin protégée en HTTP Basic
*       tags: [Admin]
*       security:
*           - basicAuth: []
*       responses:
*           200:
*              description: Authentification Basic valide
*           401:
*               desription: Non authorisé
*/
router.get("/basic",basicAuth, (req:Request,res:Response) => {
    res.json({message: "C'est la zone admin la"})
});

export default router