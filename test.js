const { fstat } = require("fs");
const fs = require('fs');

fs.writeFileSync('practice.md', 'Hello World', function (err){
    if (err){
        console.log(err)
    } else {console.log("Inside function");
    }
})
console.log("Show this");