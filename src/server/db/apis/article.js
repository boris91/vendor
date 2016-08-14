import { Schema } from 'mongoose';
import articleModelArgs from '../models/article';

const EMPTY_OBJ = {};
const SIMPLE_CB = (res, next) => (err, data) => err ? next(err) : res.send(data);

/*get APIs for Article model*/
export default dbConnection => {
	articleModelArgs[1] = new Schema(articleModelArgs[1]);
	const Article = dbConnection.model(...articleModelArgs);

	return {
		get: {
			'/articles': (req, res, next) => {
				Article.find(EMPTY_OBJ, SIMPLE_CB(res, next));
			}
		},
		post: {
			'/articles': (req, res, next) => {
				const article = new Article(req.body);
				article.save(SIMPLE_CB(res, next));
			}
		},
		patch: {},
		put: {},
		delete: {}
	};
};