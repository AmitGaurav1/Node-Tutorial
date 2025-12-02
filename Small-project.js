const http=require('http')
const pages=require('./pages')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end(`${pages.codehome}`)
    }
    else if(req.url==='/about'){
        res.end(`${pages.codeAbout}`)
    }
    else{
        res.end(`
            <h1> Arreeee....</h1>
            <p> Kanchanma to yaha hai he nahi.</p>
            <a href="/"> go home</a>
            `)
    }

})

const port=2429
server.listen(port,()=>{
    console.log(`Server is listening at ${port} no`)

})

