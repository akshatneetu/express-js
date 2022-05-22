const express = require('express')
const hbs = require('hbs')
const path = require('path')
const app = express()
const port = 8080

const html_file=path.join(__dirname,"../public")
const template_path =path.join( __dirname, "../templates/pages/")
const include_file =path.join( __dirname, "../templates/include/")
app.set('views',template_path) // specify the views directory
app.set('view engine','hbs')
hbs.registerPartials(include_file);
app.use(express.static(html_file))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/weather', (req, res) => {
    res.render('weather') 
})

app.get('*', (req, res) => {
    res.render('404',{
        errorsms:'Opps! Page Not Found'
    })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))