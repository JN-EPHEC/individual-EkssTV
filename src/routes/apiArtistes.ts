import express from "express";
import relation from "./relation.js";

const router = express.Router();
//relation
const artistes = relation.artistes;
const groupes = relation.groupes;
// methode
/// GET tout 
/**
 * @openapi
 * /api/artistes:
 *   get:
 *     summary: Récupère tous les artistes
 *     tags:
 *       - Artistes
 *     responses:
 *       200:
 *         description: Liste des artistes
 */

router.get('/', async (req:object,res:object)=>{
    const artistesAll = await artistes.findAll({
               include: {
            model: groupes,
            as: "groupe",
            attributes: ["nom"] 
        }
    });
    res.status(200).json(artistesAll);
});
///GET id
/**
 * @openapi
 * /api/artistes/{id}:
 *   get:
 *     summary: Récupère un artiste par ID
 *     tags:
 *       - Artistes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Artiste trouvé
 */


router.get('/:id', async (req:object,res:object)=>{
    let artId = req.params.id;
    const artiste = await artistes.findAll({
        where : {id : artId},
       include: {
            model: groupes,
            as: "groupe",
            attributes: ["nom"] 
        }
    });
    res.status(200).json(artiste);
});
///GET artiste par id de groupe
/**
 * @openapi
 * /api/artistes/asgroupe/{id}:
 *   get:
 *     summary: Récupère les artistes d’un groupe
 *     tags:
 *       - Artistes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Liste des artistes du groupe
 */

router.get('/asgroupe/:id', async (req:object,res:object)=>{
    let id = req.params.id;
    const artistesGrouped = await artistes.findAll({
        where : {groupeId : id},
        include: {
            model: groupes,
            as: "groupe",
            attributes: ["nom"] 
        }
    });
    res.json(artistesGrouped);
});
///GET artiste par id de sexe
/**
 * @openapi
 * /api/artistes/sexe/{sexe}:
 *   get:
 *     summary: Récupère les artistes d’un même sexe
 *     tags:
 *       - Artistes
 *     parameters:
 *       - in: path
 *         name: sexe
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Liste des artistes du même sexe
 */
router.get('/sexe/:sexe', async (req:object,res:object)=>{
    let sexe = req.params.sexe;
    const artistebySexe = await artistes.findAll({
        where : {sexe}
    });
    res.status(200).json(artistebySexe);
});
///post 
/**
 * @openapi
 * /api/artistes:
 *   post:
 *     summary: Crée un nouvel artiste
 *     tags:
 *       - Artistes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Artiste'
 *     responses:
 *       201:
 *         description: Artiste créé
 */

router.post("/",async (req:Object,res:Object) => {
    const art = await artistes.create(req.body);
    res.status(201).json(art);
    console.log(`L'artiste ${art} à bien été crée`)
});

export default router