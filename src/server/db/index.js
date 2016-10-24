const mongoose = require('mongoose');
const dbConfig = require('./config');
const createAndAttachAPIsToServer = require('./apis/index');

/*connect to DB & register APIs*/
module.exports = server => {
	const dbURI = `${dbConfig.type}://${dbConfig.host}:${dbConfig.port}/${dbConfig.name}`;
	const dbConnection = mongoose.createConnection(dbURI);
	createAndAttachAPIsToServer(dbConnection, server);
};