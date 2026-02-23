import type { Request, Response } from "express";
import express from "express";
import relation from "./relation.js";

const groupes = relation.groupes;

export const getAllGroups = async (req:object,res:object) => {
    try {
        const groupeAll = await groupes.findAll();
        res.status(200).json(groupeAll);
    } catch (error) {
    res.status(500).json({ error: (error as any).message });
    }
}

export const getGroupsById = async (req:object,res:object) => {
    try {
        let id = req.params.id
        const groupeAll = await groupes.findAll({
        where : {groupeId : id}
        });
        res.status(200).json(groupeAll);
    } catch (error) {
    res.status(500).json({ error: (error as any).message });
    }
}

export const postGroup = async (req:object,res:object) => {
     try {
        const grp = await groupes.create(req.body);
        res.status(201).json(grp);
        console.log(`Le groupe ${grp} à bien été crée`)
    } catch (error) {
        res.status(500).json({ error: (error as any).message });
    }
    
}

export const deleteUsers = async (req:Request,res:Response)=>{
    try {
            const grp = await groupes.findByPk(req.params.id);
            if (!grp) return res.status(404).json({error : "groupe invalide"});
            await grp.destroy;
            let message = `Le groupe ${req.params.id} a été supprimé`;
            res.status(204).json({"message": message});
            console.log(message)
    } catch (error) {
        res.status(500).json({ error: (error as any).message });
    };

};