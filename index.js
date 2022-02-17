/*
 * This example is a very simple way how to connect a discord bot with a mineflayer bot.
 * For this example you will need discord.js installed. You can install with: npm install discord.js
 * This example uses discord.js v13
 * You need to do this before running this example:
 * - You need to get a discord token
 * - You need to get the id of the channel you want to use
 */

if (process.argv.length < 6 || process.argv.length > 8) {
  console.log(
    "Usage : node discord.js <discord bot token> <channel id> <host> <port> [<name>] [<password>]"
  );
  process.exit(1);
}

// Load discord.js
const { Client, Intents, version, DataResolver } = require("discord.js");
// Create Discord intentions, required in v13
const intents = new Intents(["GUILDS", "GUILD_MESSAGES"]);
// Create Discord client
const client = new Client({
  intents: intents,
});

let channel = process.argv[3];

// Load mineflayer
require('events').EventEmitter.defaultMaxListeners = 100;
const mineflayer = require("mineflayer");
const { Webhook } = require('discord-webhook-node');
const hook = new Webhook('https://discord.com/api/webhooks/939768564641062922/DxYQpLRchJpqm35QxG9D__o_2eNR1lpDDvMCO9P5EmEPXHhx5y4fwCDAe-HMSGMuVGf8');
//const { randomTime } = require('mineflayer-antiafk/lib/utils')
//const emitter = new emitter,{}
const quickdb = require("quick.db");
const { spawn } = require("child_process");
const { once } = require("events");
const { isBoxedPrimitive } = require("util/types");
const bot = mineflayer.createBot({
  host: process.argv[4],
  port: parseInt(process.argv[5]),
  username: process.argv[6] || "discord",
  password: process.argv[7],
  version: 1.12,
});

function Welcome() {
  bot.chat("/Login ....");
  console.log("password writeten in chat");
}

bot.once("login", Welcome);

//emitter.setMaxListeners(100)

client.on("ready", () => {
  console.log(`The discord bot logged in! Username: ${client.user.username}!`);
  // Find the Discord channel messages will be sent to
  channel = client.channels.cache.get(channel);
  if (!channel) {
    console.log(
      `I could not find the channel (${process.argv[3]})!\nUsage : node discord.js <discord bot token> <channel id> <host> <port> [<name>] [<password>]`
    );
    process.exit(1);
  }
});

// Redirect Discord messages to in-game chat
client.on("messageCreate", (message) => {
  // Only handle messages in specified channel
  if (message.channel.id !== channel.id) return;
  // Ignore messages from the bot itself
  if (message.author.id === client.user.id) return;

  bot.chat(`${message.content}`);
});

// Redirect in-game messages to Discord channel
bot.on("chat", (username, message) => {
  // Ignore messages from the bot itself
  if (username === bot.username) return;

  channel.send(`${username}: ${message}`);
});

// Login Discord bot
client.login(process.argv[2]);


bot.once("spawn", Welcome);

bot.once("spawn", function () {
  setInterval(() => {
    const entity = bot.nearestEntity();
    if (entity !== null) {
      if (entity.type === "player") {
        bot.lookAt(entity.position.offset(0, 1.6, 0));
      } else if (entity.type === "mob") {
        bot.lookAt(entity.position);
      }
    }
  }, 50);
});
//from here is the actual code
function death(){
  bot.death
}

/*
const value= ( Math.floor(Math.random() * 101)) 
  

function respawn(){
  bot.respawn

}
  

function fun(){  
  value.reset();  
}   


function typeHiInChat(){
  bot.chat('/kill')
}

console.log('soemthing is woring')

function random(){
  if(respawn) return
    new value; 
    bot.chat('/msg NiviGaming44242 your number is ' + value)

}

bot.on('whisper', (username, message) => {
    if (username === bot.username) 
    if(message === "number") return
    bot.once('chat', random) ;
    
},  
function typeHiInChat() {
  bot.chat("/kill")
  console.log('i typed /kill');


});
bot.on('chat', (username, message) => {
  if (username === bot.username) return
  if(message == value) bot.chat("/tpa "+ username ) ,
     bot.once('chunkColumnLoad', typeHiInChat)  ,
    console.log('someone is asking for kits'),
     fun ;
     
});

*/

bot.on('login', () => {
  setTimeout(() => {
    bot.chat(
     "/login ........"
    );
  }, 30);
}
);;

/*


bot.on('whisper', (username, message) => {
  if (username === bot.username) 
  if(message === '-kit') return
  bot.on('message', (username, message) => {
  if (quickdb.get(`blacklist_${username}`)) 
    if (username === bot.username) return
    bot.chat(`/msg ${username}  you are on a cooldown of 5hrs`);
    if (message === "-kit") {
    bot.chat(`/tpa ${username}`);
    bot.chat(
      `/msg ${username}  Please wait for the bot to do it's thing. If you kill it then you will be blacklisted!`
    );
    setTimeout(() => {
      bot.chat(`/msg ${username} Thanks for using me!`);
      bot.chat(`/kill`);
      // then add user to database and blacklist
      quickdb.set(`blacklist_${username}`, true);
      setTimeout(() => {
        quickdb.delete(`blacklist_${username}`);
      }, 3.6e6);
    }, 13000);
  }
})});

*/


/*


bot.on('death', () => {
    setTimeout(() => {
      bot.chat(
        "In need of a kit? Join the Discord: https://discord.gg/y4wg2Brh .If you need kit type '-kit' in chat and accetp tp."
      );
    }, 30000);
  }
);
*///
//)




/*
  bot.on("whisper", ( username,message) => {
  if (message.startsWith("number")) { 
    const captcha = ( Math.floor(Math.random() * 101)) 
    bot.chat(`/msg ${username} ${captcha}`);
  }});
    // then check if user entered the correct captcha
bot.on('chat', (username, message) => {
      if (message.startsWith(`${captcha}`)) {
        const userInput = message.split(" ")[1];
        if (userInput == captcha) {
          bot.chat(`/msg ${username} Correct captcha, pls accept tp for kit`),
           bot.chat(`/tpa ${username} `),
          bot.once("chunkcolumload", typeHiInChat);
        } else {
          return bot.chat(`/msg ${username} wrong captcha`);
        }
      }
     }) ;
    //}
  

*/

function typeHiInChat() {
  bot.chat("/kill")
  console.log('i typed /kill');
}
function wrong(){
  bot.chat(`wronbg captcha`)
}

    bot.on("whisper", (username, message) => {
      if (message.startsWith("number")) {
        const captcha = ( Math.floor(Math.random() * 101));
        bot.chat(`/msg ${username}  yur captcha is = ${captcha}`),
    
        // then check if user entered the correct captcha
        bot.on("whisper", (username, message) => {
          if (message.startsWith('captcha')) {
            const userInput = message.split(" ")[1];
            if (userInput == captcha)  {
             // bot.chat(`/msg ${username} Correct captcha`), 
              bot.chat(`/tpa ${username}`),
              bot.once('chunkColumnLoad', typeHiInChat)}
            else {
               return bot.chat(`/msg ${username} wrong captcha`)
            }
             // bot.chat(`/msg ${username} you wont receive a kit, Sry`);
            
          }
        })
      
      }});