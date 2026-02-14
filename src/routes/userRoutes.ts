import express from 'express';
import users from '../models/Users.js'


const router = express.Router()
// ici je select tout et j'ai un un retour en json
router.get("/", async (req : object,res : object ) =>{
    const usersAll = await users.findAll();
    res.json(usersAll);
});
// ici je crée un user et je le met dans Users
router.post("/", async (req:object,res:object) => {
    const user = await users.create(req.body);
    res.json(user)
});
// ici je supprime un user dans Users selon son id

router.delete("/:id",async (req:object,res:object)=>{
    const user = await users.findByPk(req.params.id);
    if (!user) return res.status(404).json({error : "pas de user ayant cet ID"});
    await user.destroy();
    res.json({message: `User ${req.params.id} a été supprimé`});
});

export default router;
