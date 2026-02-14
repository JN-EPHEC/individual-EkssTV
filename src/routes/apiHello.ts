import express from "express";

const router = express.Router();

router.get('/:name',(req,res) => {
        let name = req.params.name;
        let date = new Date();
        let data = { message: `Bonjour ${name}`, timestamp: date};
        res.json(data);
    });

export default router