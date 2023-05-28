import { create } from 'zustand'

export interface IMessage {
	id: string
	text: string
	isWhatsAppUser: boolean
}

interface IChat {
	chatId: string
	phone: string
	messages: IMessage[]
}

interface Actions {
	addMessage: (payload: IMessage) => void
	setChat: (chatId: string, phone: string) => void
}

export const useChat = create<IChat & Actions>((set) => ({
	chatId: '',
	phone: '',
	messages: [],

	addMessage(payload) {
		set((state) => ({ ...state, messages: state.messages.concat(payload) }))
	},
	setChat(chatId: string, phone: string) {
		set((state) => ({ ...state, chatId, phone }))
	},
}))
