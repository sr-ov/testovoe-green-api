import { FC } from 'react'
import cn from 'clsx'
import Message from './Message'
import { useChat } from '..'

interface MessagesProps {}

const Messages: FC<MessagesProps> = () => {
	const messages = useChat(({ messages }) => messages)

	return (
		<ul className="flex flex-col gap-10 h-full mx-5 before:block before:flex-1">
			{messages.map(({ isWhatsAppUser, id, text }) => {
				return (
					<li className={cn(!isWhatsAppUser && 'text-end')} key={id}>
						<Message
							className={cn(
								isWhatsAppUser
									? 'rounded-[0px_24px_24px_24px]'
									: 'rounded-[24px_24px_0px_24px] !border-c2 text-start'
							)}
						>
							{text}
						</Message>
					</li>
				)
			})}
			<li id="scroll-here"></li>
		</ul>
	)
}

export default Messages
