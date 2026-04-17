// //Import the fs module:

const fs = require("fs");
// //Write a File (Callback)

// fs.writeFile("data.txt", "Hello using callback i am file system using make  file !", function(err) {
//   if (err) {
//     console.log("Error writing file:", err);
//     return;
//   }
// else {
//     console.log("File written successfully!");
// }
// });

// fs.writeFile("txt.js","this is my js file in this backe en d fiel system",function(err){
//     if(err){
//         console.log(err);
//     }
//      else {
//     console.log("finde done suces fylly ");
   
// }
// })


// //read a file fs.readFile("data.txt", "utf-8", (err, data) => {
// fs.readFile("data.txt", "utf-8", function (err, data) {
//   if (err) {
//     console.log("Error reading file:", err);
//     return;
//   }
//   console.log("File content:", data);
// });

//  fs.readFile("txt.js","utf-8",function(err, data) {
//     if(err){
//         console.log("err");
//     }
//     else {
//         console.log(data);
//     }
//  });
// //append new data in file 

//  fs.appendFile("data.txt", "\nNew line added!", function(err) {
//   if (err) {
//     console.log( err);
 
//   }
//   else{
//     console.log("Data appended!");
//   }
  
// });
// fs.appendFile("txt.js","this is my new text that i am writing again ",function (err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("appdins sucess full");
//     }
// })
// //delete file
// fs.unlink("data.txt", function(err)  {
//   if (err) {
//     console.log("Error deleting file:", err);
   
//   }
//   else{
//     console.log("File deleted!");
//   }
  
// });


// //rename file 
// fs.rename("txt.js", "newAnilkverma.js", function(err)  {
//   if (err) {
//     console.log("Error renaming file:", err);
  
//   }
//   else{
//      console.log("File renamed!");
//   }
 
// });

///Create Directory
fs.mkdir("myFolder1", (err) => {
  if (err) {
    console.log("Error creating folder:", err);
    return;
  }
  console.log("Folder created!");
});

//remove dir 
// fs.rmdir("myfolder",function(err){
//     if(err){
//         console.log(err);

//     }
//     else{
//         console.log("folder deleted done ");
//     }
// })
// fs.writeFile("myFolder/myfile.txt", "this is my file text that is i am reding now ", function(err){
//     if(err){
//         console.log(err);
//     }
//     else {
//         console.log( "my file created in folder ");
//     }
// });

//read dir 
fs.readdir("./", (err, files) => {
  if (err) {
    console.log("Error reading directory:", err);
    return;
  }
  console.log("Files and folders:", files);
});
fs.writeFile("test.txt", "Hello!", (err) => {
  if (err) throw err;

  fs.appendFile("test.txt", "\nMore text...", (err) => {
    if (err) throw err;

    fs.readFile("test.txt", "utf-8", (err, data) => {
      if (err) throw err;

      console.log("Final content:", data);

      fs.unlink("test.txt", (err) => {
        if (err) throw err;

        console.log("File deleted!");
      });
    });
  });
});
