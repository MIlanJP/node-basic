const express=require('express')
const app= express()
app.get('/',(request,response)=>{
    response.send("<h1>Hello world from node js</h1>")
})

const port=8080
app.listen(port,()=>{console.log(`Node js api is listening to port : ${port}`)});
