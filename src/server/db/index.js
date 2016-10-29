const mongodb = require('mongodb');
const dbConfig = require('./config');
const createAndAttachAPIsToServer = require('./apis/index');
const Logger = require('../utils/logger');

/*connect to DB & register APIs*/
module.exports = runServer => {
	const { type, user, pass, host, port, name, entities } = dbConfig;
	const dbURI = `${type}://${user}:${pass}@${host}:${port}/${name}`;

	Logger.pipe('connecting to DB...', 'yellow').newLine().pipe(dbURI).print();

	mongodb.MongoClient.connect(dbURI, (err, db) => {
		if (err) {
			Logger.error(err);
		} else {
			Logger.print('connected to DB!', 'green');
			const server = runServer();
			createAndAttachAPIsToServer(entities, db, server);
		}
	});
};