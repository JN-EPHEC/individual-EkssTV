import express from 'express';
import * as userControllers from "../controllers/userControllers.js";

const router = express.Router()
// ici je select tout et j'ai un un retour en json
router.get("/", userControllers.getAllUsers);
// ici je crée un user et je le met dans Users
router.post("/", userControllers.postUsers);
// ici je supprime un user dans Users selon son id
router.delete("/:id",userControllers.deleteUsers);

export default router;
