import express from "express";
import groupes from "../models/Groupes.js";
import artistes from "../models/Artistes.js";
// Déclaration des relations entre les models
groupes.hasMany(artistes,{
    foreignKey: "groupeId",
    as: "artistes"
});
artistes.belongsTo(groupes,{
    foreignKey: "groupeId",
    as: "groupe"
})

export default {groupes,artistes};