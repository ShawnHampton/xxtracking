const express = require('express');
const fs = require('fs');
const path = require('path');
const uuidv1 = require('uuid/v1');

const apiRouter = express.Router();

const dataDir = 'data/plays';

const GAMES = {
	'1846': {
		name: '1846',
		minPlayers: 2,
		maxPlayers: 6,
		bankSize: [7700, 7700, 7700, 7700, 7700],
		initialPlayerMoney: [500, 500, 500, 500, 500],

		majors: [
			{
				name: 'B&O',
				ipo: 10,
				bank: 0,
				state: 'unstarted'
			},
			{
				name: 'GWT',
				ipo: 10,
				bank: 0,
				state: 'unstarted'
			},
			{
				name: 'IC',
				ipo: 10,
				bank: 0,
				state: 'unstarted'
			}
		]
	},
	'18EU': {
		name: '18EU',
		minPlayers: 2,
		maxPlayers: 6,
		bankSize: [7700, 7700, 7700, 7700, 7700],
		initialPlayerMoney: [500, 500, 500, 500, 500],

		majors: [
			{
				name: 'KP',
				ipo: 10,
				bank: 0,
				state: 'unstarted'
			},
			{
				name: 'BN',
				ipo: 10,
				bank: 0,
				state: 'unstarted'
			},
			{
				name: 'DR',
				ipo: 10,
				bank: 0,
				state: 'unstarted'
			},
			{
				name: 'FS',
				ipo: 10,
				bank: 0,
				state: 'unstarted'
			},
			{
				name: 'KK',
				ipo: 10,
				bank: 0,
				state: 'unstarted'
			},
			{
				name: 'KB',
				ipo: 10,
				bank: 0,
				state: 'unstarted'
			}
		]
	}
};

apiRouter
	.route('/plays')
	.post((req, res) => {
		console.log('Posting new play for: ', req.body);
		let play = {
			bank: 0,
			createDate: Date.now(),
			currentPhase: 'SR',
			currentOR: 1,
			currentRound: 1,
			players: {},
			operatingRounds: {},
			status: 'ready',
			majors: {}
		};
		play.game = req.body.game;
		play.id = uuidv1();

		const game = GAMES[req.body.game];
		game.majors.forEach(major => {
			play.majors[major.name] = major;
		});

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
