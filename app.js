const express = require(`express`);
const app = express();
const morgan = require('morgan');
const user = require(`./src/routes/user`);
const con = require(`./src/modules/connection`);

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    // Get the city table data v2
    con.query("SELECT * FROM city", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });

  });

app.use(`/user`, user);
app.use(morgan('common')); 
app.set('view engine', 'ejs');

app.listen(3052, () => {
    console.log('Example app listening on port 3050!');
}); 

app.get('/', (req, res) => {
    // res.render(`index`);
    res.render('index', {subtitle: 'This is subtitle'});
});

// connection.conect(function (err) {
//     if (err) throw err;
//     console.log("Connected to mysql!");
// });



