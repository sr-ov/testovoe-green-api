import { FC } from 'react'
import cn from 'clsx'
import { Button } from '../../../shared/ui'
import { useChat } from '..'

interface ChatsProps {}

const Chats: FC<ChatsProps> = () => {
	const phone = useChat(({ phone }) => phone)

	return !phone ? null : (
		<ul className="space-y-6">
			<li>
				<Button className={cn('py-3 px-4 w-full text-right ring-1 ring-c3')}>
					{phone}
				</Button>
			</li>
		</ul>
	)
}

export default Chats
