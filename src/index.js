const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const cors = require('cors')

app.use(cors());

// Db connection
const { mongoose } = require('./database');

// Settings 
app.set('port', process.env.PORT || 5000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/tasks', require('./routes/task.routes'));
app.use('/api/app', require('./routes/app.routes'));


// Static Files
app.use(express.static(path.join(__dirname, 'public')));;

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});