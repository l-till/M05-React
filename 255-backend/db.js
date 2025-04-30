const mongoose = require('mongoose');
mongoose.connect(
	'mongodb+srv://sdev255:H1gbydb@songdb.ibrfzmd.mongodb.net/?retryWrites=true&w=majority&appName=SongDB',
	{ useNEwUrlParser: true }
);

module.exports = mongoose;
