//
// Bots commands here
//
controller.hears(['^hello'], 'direct_message,direct_mention', function(bot, message) {
    var email = message.user; // Spark User that created the message orginally 
    bot.reply(message, "Hello <@personEmail:" + email + ">");
});