import mongoose from 'mongoose';
import dbConfig from './config';
import createAndAttachAPIsToServer from './apis/index';

/*connect to DB & register APIs*/
export default server => {
	const dbURI = `${dbConfig.type}://${dbConfig.host}:${dbConfig.port}/${dbConfig.name}`;
	const dbConnection = mongoose.createConnection(dbURI);
	createAndAttachAPIsToServer(dbConnection, server);
};