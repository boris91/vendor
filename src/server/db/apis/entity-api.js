const CrudOps = require('./crud-ops');

/*get APIs for DB Table*/
module.exports = (db, tableName) => {
	const ops = new CrudOps(db, tableName);

	return {
		post: {
			[tableName]: ops.create
		},
		get: {
			[tableName]: ops.read,
			[tableName + ':id']: ops.read
		},
		put: {
			[tableName]: ops.update,
			[tableName + ':id']: ops.update
		},
		delete: {
			[tableName]: ops.destroy,
			[tableName + ':id']: ops.destroy
		}
	};
};