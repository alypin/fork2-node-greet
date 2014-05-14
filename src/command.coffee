command=()->
	greet = require("../lib/index")
	args = require("minimist")(process.argv.slice(2))
	console.log greet(args._, args.drunk)

module.exports=command