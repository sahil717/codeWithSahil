const express = require('express')
const app = express()
const path = require('path')

// EXPRESS SPECIFIC STUF
app.use('/static', express.static(path.join(__dirname, 'static'))) // this is for serving static file
app.use(express.urlencoded())//this is use to give input deta in express 

// PUG SPECIFIC STUF
app.set('view engine', 'pug')// Set the template engine as pugs
// app.set('views',path.join(__dirname,'views'))// set the viwe directroy

// ENDPOINT
app.get('/',(req,res)=>{
    const con="this is the best contant on internet" //this is how to include variable in template by pug
    const veronika={}//this is how to include variable in template by pug
    res.status(200).render('home.pug',veronika);
})
app.get('/contact',(req,res)=>{
    const con="this is the best contant on internet" //this is how to include variable in template by pug
    const veronika={}//this is how to include variable in template by pug
    res.status(200).render('contact.pug',veronika);
})

app.listen(3000, () => {
   
    console.log("this app is now run ")
})
