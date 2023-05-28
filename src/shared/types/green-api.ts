export interface GreenApiInstance {
	idInstance: string
	apiTokenInstance: string
}

export interface MessageSentResult {
	idMessage: string
}
export interface MessageDeleteResult {
	result: boolean
}

export interface IncomingMessage {
	receiptId: number
	body: {
		typeWebhook: string
		instanceData: {
			idInstance: number
			wid: string
			typeInstance: string
		}
		timestamp: number
		idMessage: string
		senderData: {
			chatId: string
			chatName: string
			sender: string
			senderName: string
		}
		messageData: {
			typeMessage: string
			textMessageData: {
				textMessage: string
			}
		}
	}
}
