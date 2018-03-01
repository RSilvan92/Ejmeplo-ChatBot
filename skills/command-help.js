//
// Command: help
//
module.exports = function (controller) {

    controller.hears(["help", "who"], 'direct_message,direct_mention', function (bot, message) {
        var text = "Here are my skills:";
        text += "\n- " + bot.enrichCommand(message, ".commons") + ": shows metadata about myself";
        text += "\n- " + bot.enrichCommand(message, "help") + ": spreads the word about my skills";
        text += "\n- " + bot.enrichCommand(message, "hello") + ": I will say hello back to you";
        text += "\n- " + bot.enrichCommand(message, "clone") + ": Create a new room with same participants";
        bot.reply(message, text);
    });
}
