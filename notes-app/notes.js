const log = console.log;
const fs = require('fs');
const chalk = require('chalk');
const error = chalk.bold.red.inverse;
const success = chalk.bold.green.inverse;

const getNote = (title) => {
    const notes = loadNotes();
    return notes.find( (note) => note.title === title );
}
const listNotes = () => {
    return loadNotes();
}
const addNotes = (title, body) => {

    const notes = loadNotes();
    const duplicateNotes = notes.find( (note) => note.title === title );

    if(!duplicateNotes){   
        notes.push({ title: title, body: body });
        saveNotes(notes);
        log(success(' Note was saved '));
    }else{
        log(error(' Note title was duplicate! '));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const keepNotes = notes.filter( (note) => note.title !== title );
    saveNotes(keepNotes);
    if(keepNotes.length != notes.length){
        log(success(' Note was removed' ));
    }else{
        log(error(' Note was not found! '));
    }
}

const saveNotes = (notes) => {
    try {
        const dataJSON = JSON.stringify(notes);
        fs.writeFileSync('notes.json', dataJSON);
    } catch (error) {
        log(error.messsage);
    }
}
const loadNotes = () => {
    try
    {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

module.exports = {
    getNote: getNote,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
}