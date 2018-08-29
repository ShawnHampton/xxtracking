const express = require('express');
const fs = require('fs');
const path = require('path');
const uuidv1 = require('uuid/v1');

const apiRouter = express.Router();

const dataDir = 'data/plays';

apiRouter
	.route('/plays')
	.post((req, res) => {
		console.log('Posting new play for: ', req.body);
		let play = {
			bank: 0,
			currentPhase: 'SR',
			currentOR: 1,
			currentRound: 1,
			startedMajors: [],
			players: {},
			operatingRounds: {},
			status: 'ready'
		};
		play.game = req.body.game;
		play.id = uuidv1();

		fs.writeFile(
			path.join(dataDir, play.id + '.json'),
			JSON.stringify(play),
			'utf8',
			err => {
				console.log('Error', err);
			}
		);

		res.json(play);
	})
	.get((req, res) => {
		fs.readdir(dataDir, (err, items) => {
			console.log(items);
			let plays = [];

			for (let i = 0; i < items.length; i++) {
				let rawdata = fs.readFileSync(path.join(dataDir, items[i]));
				let play = JSON.parse(rawdata);
				plays[i] = play;
			}
			res.json({ plays: plays });
		});
	});

apiRouter
	.route('/plays/:play_id')
	.post((req, res) => {
		const play = req.body;
		console.log('Save play: ', play.id);

		fs.writeFile(
			path.join(dataDir, play.id + '.json'),
			JSON.stringify(play),
			'utf8',
			err => {
				console.log('Error', err);
			}
		);

		res.json(play);
	})
	.get((req, res) => {
		console.log('req', req.params);
		let rawdata = fs.readFileSync(
			path.join(dataDir, req.params.play_id + '.json')
		);
		let play = JSON.parse(rawdata);
		res.json(play);
	});

module.exports = apiRouter;
