const log = console.log;
const fs = require('fs');

function getNotes(){
    return loadNotes();
}
function addNotes(title, body){
    const notes = loadNotes();

    const duplicateNotes = notes.filter( function (note) {
        return note.title === title;
    });
    if(duplicateNotes.length === 0){   
        notes.push({
            title: title,        
            body: body
        });
        saveNotes(notes);
        log('New note saved');
    }else{
        log('Note was duplicate');
    }
}

function removeNote(title){
     const notes = loadNotes();
    const keepNotes = notes.filter( function (note) {
        return note.title !== title;
    });
    saveNotes(keepNotes);
}

function saveNotes(notes){
    try {
        
    } catch (error) {
        log(error.messsage);
    }
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}
function loadNotes(){
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
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
}