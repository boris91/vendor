# hype
Fun techs hype.

##How to run the app

1. Clone this repo (via CLI):<br/>
	`>` **`git clone https://github.com/boris91/hype.git`**
2. Go to 'hype' directory (via CLI):<br/>
	`>` **`cd hype`**
3. Install all required packages (via CLI):<br/>
	`>` **`npm install`**
4. Start server on _localhost:9000_ and database 'hype' on _localhost:27017_ (via CLI):<br/>
	`>` **`npm start`**<br/>
	and wait until CLI shows this text:<br/>
	`>` _`webpack built {ID} in {N}ms`_
5. Run the app (via Web Browser):<br/>
	`>` **`http://localhost:9000`**

##How to run the app for test purposes

1. Go through first 3 steps from first section<br/>
2. Start server on _localhost:9000_ and database 'hype' on _localhost:27017_ (via CLI):<br/>
	`>` **`npm run test`**<br/>
	and wait until CLI shows this text:<br/>
	`>` _`webpack built {ID} in {N}ms`_
3. Run the app (via Web Browser):<br/>
	`>` **`http://localhost:9000`**

##How to bundle the app into distribution directory

1. Go through first 3 steps from first section<br/>
2. Run build command (via CLI):<br/>
	`>` **`npm run build`**
3. `index.html` & `index.js` files bundled into `dst` directory.