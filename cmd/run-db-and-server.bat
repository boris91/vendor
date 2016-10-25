if not exist "./db" mkdir "./db"
start mongod --dbpath ./db
node src/server/index