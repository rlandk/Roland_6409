const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan sebuah kalimat: ", (inputString)=> {
    console.log(`Panjang Kalimat: ${inputString.length}`);
    rl.close();
});