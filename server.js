/*
	DBD.js example code
	See the docs at https://dbd.leref.ga
	NPM site at https://npmjs.com/package/dbd.js
	Discord Support Server at https://discord.gg/HMUfMXDQsV
	Install the module by using npm i dbd.js
*/

// import the package
const dbd = require('dbd.js');

// define the bot instance
const bot = new dbd.Bot({
	token: 'your bot token here',
	prefix: '!'
});

// trigger the message event so the bot will respond to commands
bot.onMessage();

// add commands to the bot
bot.command({
	name: 'ping',
	code: `Pong! \`$ping\``
});

bot.command({
	name: 'trigger',
	code: `triggered owo`
});

/*
	Sets the bot status
	Read more information about setting statuses at
	https://dbd.leref.ga/guide/bot-status
*/
bot.status({
	text: 'Bot is running!',
	type: 'PLAYING',
	time: 12
});

bot.status({
	text: 'Status changed!',
	type: 'PLAYING',
	status: 'idle',
	time: 12
});

// bot variables (variables are accessable anywhere)
bot.variables({
	Name: 'Value1',
	Name2: 'another value'
});

// join the support server for help and suggestions <3
