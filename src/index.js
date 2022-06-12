
const express = require('express')
const morgan = require('morgan')
const path = require('path');
const { engine } = require ('express-handlebars')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'Public')))
app.use(morgan('combined'))
app.engine('hbs', engine({
  extname:".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

app.get('/', (req, res) => {
  res.render('home')
})
app.get('/trang-chu', (req, res) => {

  res.render('san-pham')
})
app.get('/tim-kiem', (req, res) => {
  res.render('search');
})
app.post('/tim-kiem', (req, res) => {
  console.log(req.body);
  res.send('');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  
})