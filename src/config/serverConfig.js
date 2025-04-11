const dotenv=require(`dotenv`)
dotenv.config()
module.exports={
    PORT:process.env.PORT,
    email:process.env.email,
    pass:process.env.password,
    BROKER_LINK:process.env.BROKER_LINK,
    EXCHANGE_NAME:process.env.EXCHANGE_NAME,
    EXCHANGE_KEY:process.env.EXCHANGE_KEY
}