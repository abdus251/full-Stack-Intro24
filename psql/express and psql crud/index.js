const express = require('express');
const app = express();
const Pool = require('pg').Pool;
const path = require('path');
const ejs = require('ejs');
const PORT = 3000;
require('dotenv').config();
console.log("test:", process.env.DB_NAME); 

const pool = new Pool({
    user: process.env.USER_NAME,
    host: process.env.HOST_NAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.PORT_NUMBER
});


pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error in connection', err);
    }
    client.query('SELECT NOW()', (err, result) => {
        release()
        if (err) {
            return console.error('Error executing query', err)
        }
        console.log("Connected to database")
    });
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
    res.render('index');
});

// ADD TODO ENDPOINT
app.post('/addTodo', async (req, res) => {
    const { todo, date } = req.body;

    try {
        const result = await pool.query(
            `INSERT INTO public.todo (todo, data) VALUES($1, $2) RETURNING *`,
            [todo, date]
        );
        console.log(result.rows[0]);
        res.redirect('/');
    } catch (error) {
        console.log('Error in adding todo:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});




app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});