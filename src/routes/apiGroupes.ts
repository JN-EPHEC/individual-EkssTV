import express from "express";
import relation from "./relation.js";
import apiArtistes from "./apiArtistes.js";


const router = express.Router();
// redirection 
router.use("/artistes",apiArtistes);
//model utilisée
const groupes = relation.groupes;
const artistes = relation.artistes;
//Methode appliquée 
//GET
/**
 * @openapi
 * /api/groupes:
 *   get:
 *     summary: Récupère tous les groupes
 *     tags:
 *       - Groupes
 *     responses:
 *       200:
 *         description: Liste des groupes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Groupe'
 */
router.get("/",async (req:object,res:object) => {
    const groupeAll = await groupes.findAll();
    res.status(200).json(groupeAll);
});
/**
 * @openapi
 * /api/groupes/{id}:
 *   get:
 *     summary: Récupère un groupe par ID
 *     tags:
 *       - Groupes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Groupe trouvé
 *       404:
 *         description: Groupe introuvable
 */


router.get("/:id",async (req:object,res:object) => {
    let id = req.params.id
    const groupeAll = await groupes.findAll({
        where : {groupeId : id}
    });
    res.status(200).json(groupeAll);
});
//POST
/**
 * @openapi
 * /api/groupes:
 *   post:
 *     summary: Crée un nouveau groupe
 *     tags:
 *       - Groupes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Groupe'
 *     responses:
 *       201:
 *         description: Groupe créé
 */

router.post("/",async (req:object,res:object) => {
    const grp = await groupes.create(req.body);
    res.status(201).json(grp);
    console.log(`Le groupe ${grp} à bien été crée`)
});
//DELETE
/**
 * @openapi
 * /api/groupes/{id}:
 *   Delete:
 *     summary: Supprime un  groupe
 *     tags:
 *       - Groupes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Groupe supprimé
 *       404:
 *         description: Groupe introuvable
 */

router.delete('/:id',async (req:object,res:object) => {
    const grp = await groupes.findByPk(req.params.id);
    if (!grp) return res.status(404).json({error : "groupe invalide"});
    await grp.destroy;
    let message = `Le groupe ${req.params.id} a été supprimé`;
    res.status(204).json({"message": message});
    console.log(message)
})

export default router;