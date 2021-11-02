// Setup environment variables
const dotenv = require("dotenv");
dotenv.config();

// Setup Discord client
const Discord = require("discord.js");
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ]
});

client.on("messageCreate", async (msg) => {
    if (!msg.content.startsWith("!")) return;

    const args = msg.content.slice(1).split(/ +/);
    const command = args.shift().toLowerCase();

    console.log(`${msg.author.username} ran command: ${command}`);

    if (command === "ping") {
        msg.reply("pong!");
    }
});

// Activate the client using the token from the .env file
client.login(process.env.DISCORD_TOKEN);

console.log("Bot is running!");
