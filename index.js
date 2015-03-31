var express = require('express');
var app = express();

app
  .set('views', 'views')
  .set('view engine', 'jade')

  .use(require('cookie-parser')())
  .use(require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

  .use(require('./app/login'))
  .use(require('./app/repos'))
  .use(require('./app/main'))

  .use(express.static('./public'))
  .use(require('./app/404'))

  .listen(process.env.PORT || 3000);
