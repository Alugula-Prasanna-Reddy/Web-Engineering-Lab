//8.creating a directiry
const fs=require("fs");
if(!fs.existsSync("./my_directory")){
    fs.mkdir("./my_directory",(err)=>{
        if(err)
        console.log("error");
        else
        console.log("created");
    });
}
//reading a file and writing it into a file in current working directory

fs.readFile("ReadMe.txt","utf-8",(err,data)=>{
if(err){
    console.log("error in reading the file");
}
else{
    fs.writeFile("WriteMe.txt",data,(err)=>{
        if(err){
            console.log("error in writing the file");
        }
        else{
            console.log("Sucessfully written into the file");

        }
    });
}
});