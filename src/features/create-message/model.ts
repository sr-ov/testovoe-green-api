import { nanoid } from 'nanoid'
import { sendMessage, receivingNotification } from '../../shared/api'
import { useChat } from '../../entities/chat'

export const useSendMessage = () => {
	const addMessage = useChat(({ addMessage }) => addMessage)
	const chatId = useChat(({ chatId }) => chatId)

	return async (message: string) => {
		try {
			await sendMessage(chatId, message)
			addMessage({
				id: nanoid(),
				isWhatsAppUser: false,
				text: message,
			})
		} catch (error) {
			console.error(error)
		}
	}
}

export const useReceivedMessage = () => {
	const addMessage = useChat(({ addMessage }) => addMessage)

	return async () => {
		try {
			const res = await receivingNotification()
			if (!res) {
				return
			}

			addMessage({
				id: nanoid(),
				isWhatsAppUser: true,
				text: res.text,
			})
		} catch (error) {
			console.error(error)
		}
	}
}
