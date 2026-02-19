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
router.get("/",async (req:object,res:object) => {
    const groupeAll = await groupes.findAll();
    res.status(200).json(groupeAll);
});
router.get("/:id",async (req:object,res:object) => {
    let id = req.params.id
    const groupeAll = await groupes.findAll({
        where : {groupeId : id}
    });
    res.status(200).json(groupeAll);
});
//POST
router.post("/",async (req:object,res:object) => {
    const grp = await groupes.create(req.body);
    res.status(201).json(grp);
    console.log(`Le groupe ${grp} à bien été crée`)
});
//DELETE
router.delete('/:id',async (req:object,res:object) => {
    const grp = await groupes.findByPk(req.params.id);
    if (!grp) return res.status(404).json({error : "groupe invalide"});
    await grp.destroy;
    let message = `Le groupe ${req.params.id} a été supprimé`;
    res.status(204).json({"message": message});
    console.log(message)
})

export default router;