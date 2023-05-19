import { FC } from 'react'
import cn from 'clsx'
import { DivProps } from 'react-html-props'
import { Button, Input } from '../../shared/ui'
import addMessageIcon from '../../assets/icons/add-message.svg'

interface CreateMessageProps extends DivProps {
	isChatSelected: boolean
}

const CreateMessage: FC<CreateMessageProps> = ({
	className,
	isChatSelected,
	...props
}) => {
	return (
		<div
			className={cn(
				'flex justify-center gap-[10px] self-end',
				!isChatSelected && 'pointer-events-none blur-[50px]',
				className
			)}
		>
			<Input className="w-[65%]" placeholder="Введите сообщение" />
			<Button className="bg-c2 py-2 px-4">
				<img src={addMessageIcon} alt="" aria-hidden="true" />
			</Button>
		</div>
	)
}

export default CreateMessage
