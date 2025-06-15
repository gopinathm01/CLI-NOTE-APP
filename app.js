const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');


const { addNotes, listNotes, removeNotes } = require('./notes.js');


const argv = yargs(hideBin(process.argv)).command(
    {
        command:'add',
        describe:'Add a new note',
        builder:{
            name:{
                describe:'Name of the product',
                demandOption:true,
                type:'string'
            },
            price:{
                describe:'Price of the product',
                demandOption:true,
                type:'number'
            }
        },
        handler(argv){
          addNotes(argv.name, argv.price);
        }
    }
).command({
    command:'list',
    describe:'List all notes',
    handler(){
        listNotes();
    }
}).command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        name:{
            describe:'Name of the product to remove',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        removeNotes(argv.name);
    }
})

.help() 
.strict()
.argv;

