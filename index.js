const express = require('express')
const nunjucks = require('nunjucks')
const dotenv = require('dotenv')

if(process.env.NODE_ENV !== "production"){
  dotenv.config()
}


const port = process.env.PORT || 8000
const app = express()

app.use(express.static('public'))

nunjucks.configure('views', {
  autoescape: true,
  express: app
})


app.get('/', (req,res) => {
  res.render('index.html', {first_name: "Vladimir", second_name: "Full Stack", mail: "vlad@gmail.com", social: {fb: "www.facebook.com", in: "linked.in", tweet: "tweeter.com", git: "github.com"}, edu: { uni: "Charles uni", school: "super high school" }, skills:["js", "java", "python", "linux"]})

})



app.listen(port, () => {
  console.info(`port is running on: ${port}`)
})



