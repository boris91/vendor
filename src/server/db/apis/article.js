import { Schema } from 'mongoose';
import articleModelArgs from '../models/article';

const EMPTY_OBJ = {};

/*get APIs for Article model*/
export default dbConnection => {
	articleModelArgs[1] = new Schema(articleModelArgs[1]);
	const Article = dbConnection.model(...articleModelArgs);

	return {
		get: {
			'/articles': (req, res, next) => {
				Article.find(EMPTY_OBJ, (err, data) => err ? next(err) : res.send(data));
			}
		},
		put: {},
		post: {},
		delete: {}
	};
};