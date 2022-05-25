module.exports = async (client) => {
    console.log(`Logged to the client ${client.user.username}\n-> Ready on ${client.guilds.cache.size}`);

    client.user.setActivity(client.config.app.playing);
};