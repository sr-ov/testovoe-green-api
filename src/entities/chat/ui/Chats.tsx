import { FC } from 'react'
import cn from 'clsx'
import { Button } from '../../../shared/ui'
import { chats } from '..'

interface ChatsProps {}

const Chats: FC<ChatsProps> = (props) => {
	return (
		<ul className="space-y-6">
			{chats.map((c, i) => {
				return (
					<li key={c.id}>
						<Button
							className={cn(
								'py-3 px-4 w-full text-right ring-1 ring-c3',
								i == 0 && 'bg-c3 text-c1'
							)}
						>
							{c.number}
						</Button>
					</li>
				)
			})}
		</ul>
	)
}

export default Chats
