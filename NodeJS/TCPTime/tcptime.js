var net = require('net');

// formats the time passed in to either add 0 at the beginning or just return the number
function fill(i){
    return (i < 10 ? "0": "") + i;
}

// retrieves the time right now and formarts it to YYYY-MM-DD HH:MM
function timeNow(){
    var date = new Date();
    return date.getFullYear() + "-"
     + fill(date.getMonth() + 1) + "-" 
     + fill(date.getDate()) + " "
     + fill(date.getHours()) + ":"
     + fill(date.getMinutes());
}

//takes data object and writes to it and closes it
var server = net.createServer((socket) =>{
    socekt.end(timeNow() + "\n");
});

// converts the console argument to a number
server.listen(+process.argv[2]);
