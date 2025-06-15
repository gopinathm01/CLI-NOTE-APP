A simple and elegant CLI-based note keeper built using Node.js and Yargs. 

git clone https://github.com/yourusername/cli-note-keeper.git
cd cli-note-keeper
npm install

i/p via client  

cli-note-keeper add --title="Dream" --body="Build a startup"
cli-note-keeper list


project structure 

cli-note-keeper/
├── bin/
│   └── index.js        # Entry point for CLI
├── notes.json          # Local storage for notes
├── package.json        # Metadata + scripts
├── README.md           # This file!
