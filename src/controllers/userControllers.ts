import type { Request, Response } from "express";
import users from "../models/Users";

export const getAllUsers = async (req : Request,res : Response ) =>{
    try {
        const usersAll = await users.findAll();
        res.status(200).json(usersAll);

    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
export const postUsers = async (req:Request,res:Response) => {
    try {
        const user = await users.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: (error as any).message });
    }
    
};
export const deleteUsers = async (req:Request,res:Response)=>{
    try {
            const user = await users.findByPk(req.params.id);
            if (!user) return res.status(404).json({error : "pas de user ayant cet ID"});
            await user.destroy();
            res.json({message: `User ${req.params.id} a été supprimé`});
    } catch (error) {
        res.status(500).json({ error: (error as any).message });
    };

};
