import store from 'store2'
import { GreenApiInstance, MessageSentResult } from '../types'

const createWhatsAppClient = () => {
	try {
		const { apiTokenInstance, idInstance }: GreenApiInstance =
			store.get('viewer').state
		// @ts-ignore
		return window.whatsAppClient.restAPI({
			idInstance,
			apiTokenInstance,
		})
	} catch (error) {
		console.error(error)
	}
}

export const sendMessage = async (
	chatId: string,
	message: string
): Promise<MessageSentResult | undefined> => {
	return createWhatsAppClient()?.message.sendMessage(chatId, null, message)
}

export const receivingNotification = async (): Promise<
	{ typeWebhook: string; text: string } | undefined
> => {
	try {
		const restAPI = createWhatsAppClient()
		const data = await restAPI?.webhookService.receiveNotification()
		if (!data?.receiptId) {
			throw new Error(`receiptId is ${data?.receiptId}`)
		}

		if (data?.body.typeWebhook !== 'outgoingMessageReceived') {
			await restAPI?.webhookService.deleteNotification(data.receiptId)
			throw new Error(
				`typeWebhook is not outgoingMessageReceived!
				typeWebhook is ${data?.body.typeWebhook}`
			)
		}

		const {
			receiptId,
			body: {
				typeWebhook,
				messageData: {
					textMessageData: { textMessage: text },
				},
			},
		} = data
		await restAPI?.webhookService.deleteNotification(receiptId)

		return { typeWebhook, text }
	} catch (reason) {
		console.error(reason)
	}
}
