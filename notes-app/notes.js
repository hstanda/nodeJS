const log = console.log;
const fs = require('fs');

function getNotes(){
    return loadNotes();
}
function addNotes(title, body){
    const notes = loadNotes();

    // notes.push({
    //     title: title,        
    //     body: body
    // });
    // saveNotes(notes);

    log(notes);
    const duplicateNotes = notes.foreach({ function (note) {
        return note.title === title;
    }});
    return false;
    if(duplicateNotes.length === 0){   
        notes.push({
            title: title,        
            body: body
        });
        saveNotes(notes);
        log('note saved');
    }else{
        log('note was duplicate');
    }
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
}