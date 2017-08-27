import express from 'express';
import r from 'rethinkdb';
import bodyParser from 'body-parser';

const app = express();

let connection = null;

r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
    if (err) throw err;
    connection = conn;
});

app.get('/api/todos', (req, res) => {
	r.db('todos').table('mytodos').run(connection, function(err, cursor) {
	    if (err) throw err;
	    cursor.toArray(function(err, result) {
	        if (err) throw err;
	        res.send(result);
	    });
	});
});

app.use(bodyParser.json());
app.post('/api/todo', (req, res) => {
	r.db('todos').table('mytodos').insert(req.body).run(connection, function(err, result) {
	    if (err) throw err;
	    res.send(result);
	});
});

app.listen(3001);

