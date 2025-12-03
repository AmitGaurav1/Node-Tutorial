const eventEmitter=require('events')

const obj=new eventEmitter();

obj.on('request',()=>{
    console.log("This is event on library")
})
obj.on('request',(name,id)=>{
    console.log(`Name :${name} Id:${id}`)
})

obj.emit('request','john',2)