// const validator = require('validator');
const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
const log = console.log;
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
 handler : function(argv){
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
    handler : function(argv){
       notesModel.removeNote(argv.title);
    }
});

// list note
yargs.command({
    command : 'list',
    describe : 'list all notes',
    handler : function(){
        console.log('list all notes');
    }
});

// read note
yargs.command({
    command : 'read',
    describe : 'read a note',
    handler : function(){
        console.log('read note');
    }
});

log(notesModel.getNotes());
yargs.parse();
//  console.log(yargs.argv)