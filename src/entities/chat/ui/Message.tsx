import { FC } from 'react'
import { DivProps } from 'react-html-props'
import cn from 'clsx'

interface MessageProps extends DivProps {}

const Message: FC<MessageProps> = ({ className, children }) => {
	return (
		<div
			className={cn(
				'border-c3 border-[1px] text-[15px] text-c3 py-3.5 px-5 max-w-[80%] inline-block',
				className
			)}
		>
			{children}
		</div>
	)
}

export default Message
