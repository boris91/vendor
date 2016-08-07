import db from './db';

export default {
	get: {
		'/page/photos': (req, res) => res.send(db.page.photos[req.query.year] || null),
		'/page/years': (req, res) => res.send(Object.keys(db.page.photos))
	},
	put: {},
	post: {},
	delete: {}
};