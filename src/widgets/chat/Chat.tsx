import { FC } from 'react'
import { CreateMessage } from '../../features/create-message'
import { Messages } from '../../entities/chat'

interface ChatProps {}

const Chat: FC<ChatProps> = () => {
	return (
		<div className="col-span-9 grid grid-rows-[1fr_auto] py-10 overflow-y-hidden h-screen">
			<div className="overflow-y-auto scroll-smooth">
				<Messages />
			</div>
			<CreateMessage className="mt-10" />
		</div>
	)
}

export default Chat
