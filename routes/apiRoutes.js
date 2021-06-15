
const uuid = require("uuid");
const notes = require("../db/db.json");
const fs = require('fs');
const { text } = require("express");


module.exports = (app) => {
   

    app.get('/api/notes', (req, res) => res.json(notes));





   
    app.post('/api/notes', (req, res) => {
        const newo = {
            id: uuid.v4(),
            title: req.body.title,
            text: req.body.text

        }


        console.log(req.body)
        notes.push(newo);
        const note1 = JSON.stringify(notes);
        fs.writeFile("../db/db.json", note1, () => { console.log('hello') });
        res.send(notes);

    })
   
}