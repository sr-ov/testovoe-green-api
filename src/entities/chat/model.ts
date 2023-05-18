export interface IMessage {
	id: string
	text: string
	author: string
}

export interface IChat {
	id: string
	number: string
	messages: IMessage[]
}

export const chats: IChat[] = [
	{
		id: '1',
		number: '+7 222 744 11 21',
		messages: [
			{
				id: '1',
				text: 'hello world!!!',
				author: '1',
			},
		],
	},
	{
		id: '2',
		number: '+7 144 467 99 00',
		messages: [
			{
				id: '1',
				text: 'bye world!!!',
				author: '1',
			},
		],
	},
]
