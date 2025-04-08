const dotenv=require(`dotenv`)
dotenv.config()
module.exports={
    PORT:process.env.PORT,
    email:process.env.email,
    pass:process.env.password
}