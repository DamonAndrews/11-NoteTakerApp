const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

notes.get('/', (req, res) => {
    console.info(`Received a ${req.method} request for your notes, hold tight`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));

});

notes.delete(`/:{id}`, ), (req, res) => {
    res.json(`DELETE route`)
    // deleteNote(noteId).then(() => {
    //     getAndRenderNotes();
       
    // readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
};

notes.post('/', (req, res) => {
    console.info(`${req.method} request made to add note, hold please`);
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const makeNote = {
            title,
            text,
            id: uuid(),
        };

        readAndAppend(makeNote, './db/db.json');
        res.json('Your note was added, Hallelujah!!');
    } else {
        res.error('Houston, we have a problem, please try again');
    }
    });

    module.exports = notes;
    