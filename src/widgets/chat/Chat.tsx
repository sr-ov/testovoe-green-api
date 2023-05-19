import { FC } from 'react'
import { CreateMessage } from '../../features/create-message'

interface ChatProps {}

const Chat: FC<ChatProps> = (props) => {
	return (
		<div className="col-span-9 px-5 grid grid-rows-[1fr_auto] py-5">
			<CreateMessage className="mt-16" isChatSelected={false} />
		</div>
	)
}

export default Chat
