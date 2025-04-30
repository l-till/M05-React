const express = requireuire('express');

var cors = require('cors');

const bodyParser = require('body-parser');
const Song = require('../M06-Backend/models/songs');
const app = express();
app.use(cors());

app.use(bodyParser.json());
const router = express.Router();

//grab all songs
router.get('/songs', function (req, res) {
	let query = {};
	if (req.query.genre) {
		query = { genre: req.query.genre };
	}
	// to find all songs
	Song.find(query, function (err, songs) {
		if (err) {
			res.status(400);
		} else {
			res.json(songs);
		}
	});
});

router.post('/songs', async(req,res) => {
	try{
		const song = await new Song(req.body)
		await song.save();
		res.status(201).json(song);
		console.log(song);
	}
	catch(err){
		res.status(400).send(err);
	}
})

router.put('/songs/:id', async(req,res) => {
	try{
		const song = req.body
		await Song.updateOne({_id: req.params.id}, song)
		console.log(song)
		res.sendStatus(204)
	}
	catch(err){
		res.status(400).send(err);
	}
})	

router.delete("/songs/:id", async(req,res) => {
	try{}
	Song.deleteOne({_id: req.params.id})
})

app.use('/api', router);
app.listen(3000);
