const TelegramBot = require("node-telegram-bot-api")
require("dotenv").config()

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(process.env.TOKEN, { polling: true })

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
	// 'msg' is the received Message from Telegram
	// 'match' is the result of executing the regexp above on the text content
	// of the message
	const chatId = msg.chat.id
	const resp = match[1] // the captured "whatever"

	// send back the matched "whatever" to the chat
	bot.sendMessage(chatId, resp)
})

// /start
bot.onText(/\/start/, (msg) => {
	// 'msg' is the received Message from Telegram

	const chatId = msg.chat.id
	const welcomeText =
		"Привет! Тут ты можешь проверить, насколько хорошо ты знаешь своего друга (или самому создать опрос и узнать, насколько хорошо знают тебя)"

	bot.sendMessage(chatId, welcomeText)
})

bot.onText(/\/help/, (msg, match) => {
	// 'msg' is the received Message from Telegram

	const chatId = msg.chat.id
	const welcomeText = "Список команд:\n/start - приветственное слово\n"

	bot.sendMessage(chatId, welcomeText)
})

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
	const chatId = msg.chat.id

	// send a message to the chat acknowledging receipt of their message
	bot.sendMessage(chatId, "message got")
})
