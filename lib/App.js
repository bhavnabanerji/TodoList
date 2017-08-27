'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _rethinkdb = require('rethinkdb');

var _rethinkdb2 = _interopRequireDefault(_rethinkdb);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var connection = null;

_rethinkdb2.default.connect({ host: 'localhost', port: 28015 }, function (err, conn) {
	if (err) throw err;
	connection = conn;
});

app.use((0, _cors2.default)());

app.get('/api/todos', function (req, res) {
	_rethinkdb2.default.db('todos').table('mytodos').run(connection, function (err, cursor) {
		if (err) throw err;
		cursor.toArray(function (err, result) {
			if (err) throw err;
			res.send(result);
		});
	});
});

app.use(_bodyParser2.default.json());
app.post('/api/todo', function (req, res) {
	console.log('Request body is: ', req.body);
	_rethinkdb2.default.db('todos').table('mytodos').insert(req.body).run(connection, function (err, result) {
		if (err) throw err;
		res.send(result);
	});
});

app.listen(3001);