import express from "express";
import relation from "./relation.js";

const router = express.Router();
//relation
const artistes = relation.artistes;
const groupes = relation.groupes;
// methode
/// GET tout 
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
router.get('/sexe/:sexe', async (req:object,res:object)=>{
    let sexe = req.params.sexe;
    const artistebySexe = await artistes.findAll({
        where : {sexe}
    });
    res.status(200).json(artistebySexe);
});
///post 
router.post("/",async (req:Object,res:Object) => {
    const art = await artistes.create(req.body);
    res.status(201).json(art);
    console.log(`L'artiste ${art} à bien été crée`)
});

export default router