//GLOBALS - NO WINDOW !!!!

// __dirname    -   path to current directory
// __filename   -   file name
// require      -   function to use module (commonJS)
// module       -   info about current module (file)
// process      -   info about env where the program is being executed

console.log(__dirname)

setInterval(() => {
    console.log("Hello nodeJS");
}, 1000);