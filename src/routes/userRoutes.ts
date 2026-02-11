import express from 'express';
const users = [
{ id: 1, name: "Alice" },
{ id: 2, name: "Bob" },
];

//const express = require('express')
const router = express.Router()

router.get("/", (req : object,res : object ) =>{
    res.json(users);
});

