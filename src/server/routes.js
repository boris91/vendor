import db from './db';

export default {
	get: {
		'/page/photos': (req, res) => res.send(db.page.photos[req.query.year] || null)
	},
	put: {},
	post: {},
	delete: {}
};