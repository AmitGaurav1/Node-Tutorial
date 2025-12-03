const fs=require('fs')
// console.log("Process is starting")
// const a=10
// const b=20
// const c=a+b
// console.log(c)

// setTimeout(()=>{
//     console.log("This will print after 2 sec")
// },2000)
// setImmediate(() => console.log("Immediate"));


// fs.readFile("../Archan/Bihar.txt","utf8",(err,res)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(res);
// })

// console.log("Process is ending")


 /*************************************Promise**************************/
const getText=(path)=>{

    return new Promise((resolve,reject)=>{
        fs.readFile(path,'utf8',(err,data)=>{
        if(err){
            reject(err)
        }
        else{
            resolve(data)
        }
    })

    })
}


// getText('../Archan/Bihar.txt')
// .then(res=>{console.log(res)})
// .catch(err=>{console.log(err)})

// const first=async()=>{
//     const res=await getText('../Archan/Bihar.txt')
//     console.log(res);
// }
// first()



const t1 = setInterval(() => console.log("Kanchan"), 1000);
const t2 = setInterval(() => console.log("Archan"), 1500);

setTimeout(() => {
    clearInterval(t1);
    clearInterval(t2);
    console.log("Stopped!");
}, 10000);
