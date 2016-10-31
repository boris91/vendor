const getTransactionCallback = (res, next) => (err, data) => err ? next(err) : res.send(data);

class CrudOps {
	constructor(db, tableName) {
		this._db = db;
		this._tableName = tableName;
		this.create = this.create.bind(this);
		this.read = this.read.bind(this);
		this.update = this.update.bind(this);
		this.destroy = this.destroy.bind(this);
	}

	get _table() {
		return this._db.collection(this._tableName);
	}

	create(req, res, next) {
		const reqData = req.body;
		if (Array.isArray(reqData)) {
			reqData.forEach(data => this._table.save(getTransactionCallback(res, next)), this);
		} else {
			this._table.save(getTransactionCallback(res, next));
		}
	}

	read(req, res, next) {
		this._table.find().toArray(getTransactionCallback(res, next));
	}

	update(req, res, next) {
		//TODO: implement
	}

	destroy(req, res, next) {
		//TODO: implement
	}
}

module.exports = CrudOps;