const fs = require('fs');

fs.readFile('display1.txt', 'utf-8', function(err, data){
    if(err){
        console.log('Error');
    }
    console.log(data);
});
console.log('Done');