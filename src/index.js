const express=require(`express`)
const bodyparser=require(`body-parser`)
const {PORT}=require(`./config/serverConfig`)
const apiroutes=require(`./routes/index`)
const {job}=require(`./utils/jobs`)
const mailService=require(`./services/mailServices`)
const {createChannel,subscribeMessage}=require(`./utils/messageQueue`)
const {EXCHANGE_KEY}=require(`./config/serverConfig`)
const serverStart=async ()=>{
    const app=express();
    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({extended:true}))
    app.use(`/api`,apiroutes);
    const channel = await createChannel();
    subscribeMessage(channel, mailService.service, EXCHANGE_KEY);
    app.listen(PORT,()=>{
        console.log(`Server started on PORT:${PORT}`)
        
    })
}
serverStart()