import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

class artistes extends Model {};

artistes.init(
        {
        // Attributs ici
        id : {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nation :{
            type : DataTypes.STRING,
            allowNull: false,
        },
        nickname :{
            type : DataTypes.STRING,
            allowNull: false,
        },
        sexe :{
            type : DataTypes.STRING,
            allowNull: false,
        },
        groupeId:{
            type :DataTypes.INTEGER,
            references : {
                model: "Groupes",
                key : "groupeId"
            }
        },
    },
    {
        //les options de la table ici (model)
        sequelize, //need to pass the connection instance
        modelName: 'artistes',// Nom de la table 
    },
);

export default artistes