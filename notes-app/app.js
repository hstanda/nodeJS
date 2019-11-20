// const validator = require('validator');
const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
const log = console.log;
const error = chalk.bold.red.inverse;
const success = chalk.bold.green.inverse;
yargs.version('1.1.0')

const notesModel = require('./notes');

//add new note
yargs.command({
 command : 'add',
 describe : 'add a new note',
 builder : {
     title : {
         describe : "Note title",
         demandOption : true,
         type : 'string'
     },
     body : {
        describe : "Note body",
        demandOption : true,
        type : 'string'
        }
},
handler(argv){
        notesModel.addNotes(argv.title, argv.body);
    }
});

// remove note
yargs.command({
    command : 'remove',
    describe : 'remove a note',
    builder : {
        title : {
            describe : "Note title",
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
       notesModel.removeNote(argv.title);
    }
});

// list note
yargs.command({
    command : 'list',
    describe : 'list all notes',
    handler(){
        notesModel.listNotes().forEach( note => {
            log(success(' Title : '+ note.title + ' '));
        });
    }
});

// read note
yargs.command({
    command : 'read',
    describe : 'read a note',
    builder : {
        title : {
            describe : "Note title",
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
       const note =  notesModel.getNote(argv.title);
       if(note){  
           log(success(' Title : ' + note.title + ' '));
           log(success(' Body : ' + note.body + ' '));
        }else{
            log(error(' No not was found '));
        }
    }
});

// log(notesModel.getNotes());
yargs.parse();
//  console.log(yargs.argv)