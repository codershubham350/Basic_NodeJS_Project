const fs = require("fs");

// [Blocking] Synchronous fileReading.
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// [Blocking] Synchronous fileWriting.
// const textOut = `This is what we know about the avacado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File written!");

//[Non-Blocking] Asynchronous fileReading and fileWriting
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if (err) {
    console.error("Error Occured in Data1 😶‍🌫️");
    return;
  }
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    if (err) {
      console.error("Error Occured in Data2 😶‍🌫️");
      return;
    }
    console.log(data2);
    fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
      if (err) {
        console.error("Error Occured in Data3 😶‍🌫️");
        return;
      }
      console.log(data3);

      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        if (err) {
          console.error("Error Occured in Write 😶‍🌫️");
          return;
        }
        console.log("Your file has been Written😂");
      });
    });
  });
});
console.log("Will read file!");

// Arrow function dosen't have it's oen 'this' keyword insted it uses 'this' keyword from parent i.e, it is lexically scoped.
// Declaration function has it's own 'this' keyword
