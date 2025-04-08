const express=require(`express`)
const bodyparser=require(`body-parser`)
const {PORT}=require(`./config/serverConfig`)
const apiroutes=require(`./routes/index`)
const {job}=require(`./utils/jobs`)

const serverStart=()=>{
    const app=express();
    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({extended:true}))
    app.use(`/api`,apiroutes);
    app.listen(PORT,()=>{
        console.log(`Server started on PORT:${PORT}`)
        
    })
}
serverStart()