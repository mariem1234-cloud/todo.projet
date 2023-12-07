const express = require('express');
const cors = require('cors');
require('./config/connect');
const TodoRouter = require('./routes/todo');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/crudDev', TodoRouter);

app.listen(3000, () => {
    console.log('server works');
});
