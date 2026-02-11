import express from 'express';

function greet(name: string): string {
    return 'Salut ' + name ;
};

let message = greet('Yuqi');
console.log(message);

const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.send('Salut c\'est jhonny Bienvenu sur mon API');
    console.log(typeof(req),typeof(res));
});

app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});
