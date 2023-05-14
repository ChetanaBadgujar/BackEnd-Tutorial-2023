// const a = {
//     average:(a,b) => {
//         console.log((a+b)/2)
//     },
//     percent:(a,b)=>{
//         console.log((a/b)*100)
//     }
// }

// module.exports = a

//file
//built In
//Third party

// const fs = require('fs')
// const {readFileSync} = require('fs')
//ASYNCHRONOUS
// fs.readFile("./intro.txt","utf-8",(err,data)=>{
//     if (err){
//         throw err
//     }
//     console.log(data)
// })

//SYNCHRONOUS
// const a = fs.readFileSync("./intro.txt","utf-8")
// console.log(a)


// const a = "HEY DEAR....Nodejssfasfsdfasdfads"
// // fs.writeFile("./sample.txt",a,()=>{console.log("written")})
// fs.writeFileSync("./sample.txt",a,()=>{console.log("written")})

// console.log("I am first")

// const path = require('path')
// // const a = path.extname("/BackEnd-Tutorial-2023/index.js")
// // const a = path.basename("/BackEnd-Tutorial-2023")
// const a = path.join()
// console.log(a)

// const os = require('os')
// console.log(os.freemem())
// console.log(os.hostname())
// console.log(os.totalmem())

const http = require("http")
const fs = require('fs')
const PORT = process.env.PORT;
const hostname = "localhost"

const home = fs.readFileSync("./inded.html","utf-8")

console.log(__dirname)

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        return res.end(home)
    }
    else if(req.url === "/about"){
       return  res.end("<h1>About Page</h1>")
    }
    else if(req.url === "/contact"){
       return  res.end("<h1>Contact Page</h1>")
    }
    else if(req.url === "/service"){
        return res.end("<h1>Service Page</h1>")
    }
    else{
        return res.end("<h1>404 : Page Not Found</h1>")
    }
})

server.listen(PORT,hostname,()=>{
    console.log(`Server is running on http://${hostname}:${PORT}`)
})



