import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";


/// User table (model)

class User extends Model {}

User.init(
    {
        // Attributs ici
        prenom :{
            type : DataTypes.STRING,
            allowNull: false,
        },
        nom :{
            type : DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        //les options de la table ici (model)
        sequelize, //need to pass the connection instance
        modelName: 'User',// Nom de la table 
    },
);

console.log(User === sequelize.models.User);

