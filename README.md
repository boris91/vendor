# hype
Fun techs hype.

##How to run the app

1. Clone this repo (via CLI):<br/>
	`>` **`git clone https://github.com/boris91/hype.git`**
2. Go to 'hype' directory (via CLI):<br/>
	`>` **`cd hype`**
3. Install all required packages (via CLI):<br/>
	`>` **`npm install`**
4. Start database 'hype' on _localhost:27017_ (via CLI):<br/>
	`>` **`rundb`**<br/>
	and wait until CLI shows this text:<br/>
	`>` _`NETWORK  [initandlisten] waiting for connections on port 27017`_
5. Start server on _localhost:9000_ (via CLI):<br/>
	`>` **`npm start`**<br/>
	and wait until CLI shows this text:<br/>
	`>` _`webpack built {ID} in {N}ms`_
6. Run the app (via Web Browser):<br/>
	`>` **`http://localhost:9000/`**

##How to bundle the app main script

1. Go through first 4 steps from first section<br/>
2. Run prod-build command (via CLI):<br/>
	`>` **`npm run prod`**
3. See `bundle.js` file in `dst` directory.

##How to run the app for test purposes

1. Go through first 4 steps from first section<br/>
2. Start server on _localhost:9000_ (via CLI):<br/>
	`>` **`npm run test`**<br/>
	and wait until CLI shows this text:<br/>
	`>` _`webpack built {ID} in {N}ms`_
3. Run the app (via Web Browser):<br/>
	`>` **`http://localhost:9000/`**