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

app.get('/users'(req, res) => {
    res.render('users/index')
})

app.get('/signup', (req, res) => {
    res.render('signup.ejs')
})

app.post('/users', (req, res) => {
    let params = req.body
    User.sync({force: true}).then(() => {
        return User.create({
          name: params.name,
          password: params.password,
          email: params.email

        });
      });
    res.redirect('users')
})

app.get('/new-cohort', (req, res) = > {
    res.render('cohorts/new.ejs')
})

app.post('/cohorts', (req, res) => {
  let params = req.body
  Cohort.sync({force: true}).then(() => {
      return User.create({
        name: params.name,
        courseID: params.courseID,

      });
    });
    res.redirect('cohorts')

})
// Model definition
const User = sequelize.define('user', {
    name: Sequelize.STRING,
    password: Sequelize.STRING
    email: Sequelize.STRING
    education: Sequelize.INTEGER
  });

app.get('cohorts', (req, res) => {
  let cohorts = [];
  Cohort.all().then((cohort) => {
    for (c of cohort) {
      cohorts.push(c)
    }
  }).then(() = > {
    res.render('cohorts/index', {cohorts: cohorts})

  })
})

app.get('users', (req, res) => {
  let users = [];
  User.all().then((cohort) => {
    for (u of user) {
      users.push(c)
    }
  }).then(() = > {
    res.render('users/index', {users: users})

  })
})


  const Cohort = sequelize.define('cohort', {
    name: Sequelize.STRING,
    courseID: Sequelize.INTEGER,

  })

const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  storage: 'development.sqlite3',

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});
