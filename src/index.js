
const express = require('express')
const morgan = require('morgan')
const path = require('path');
const { engine } = require ('express-handlebars')
const route=require('./routes')
const app = express();
const db=require('./config/db')
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
db.connection();
route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  
})


// function executeStatement () {
//   request = new Request("select 123, 'hello world'", (err, rowCount) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(`${rowCount} rows`)
//     }
//     connection.close()
//   })

//   request.on('row', (columns) => {
//     columns.forEach((column) => {
//       if (column.value === null) {
//         console.log('NULL')
//       } else {
//         console.log(column.value)
//       }
//     })
//   })

//   connection.execSql(request)
// }