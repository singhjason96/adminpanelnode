const express = require(express);
const app = express();
const port = 5050;

app.set('views', './views');
app.set('view engine', 'ejs');

app.listen(port, () => {console.log(`Express app listening on https://localhost${port}`)})

// app.[VERB]([PATH], function(req, res) {//things to do})

app.get('/', (req, res) => {
  res.render('home.ejs')
})