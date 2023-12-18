console.log("Hello Wold");
console.log("This is a console log from my server.js file");
console.log(__dirname);
console.log(__filename);

// Importing path module (using plain javascript)
const path = require("path");

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));

// Get property from path object
console.log(path.parse(__filename).base);

// Concatenate paths
console.log(path.join(__dirname, "test", "hello.html"));

// Importing filesystem module
import fs from "fs"; 

// Create folder
try {
  fs.mkdirSync(path.join(__dirname, "test"));
} catch (error) {

}