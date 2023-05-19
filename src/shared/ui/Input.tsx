import { FC } from 'react'
import { InputProps } from 'react-html-props'
import cn from 'clsx'

interface IInputProps extends InputProps {}

const Input: FC<IInputProps> = ({ className, ...props }) => {
	return (
		<input
			className={cn(
				'rounded-lg ring-1 bg-[transparent] text-c2 placeholder:text-c4 ring-c3 px-5',
				className
			)}
			{...props}
		/>
	)
}

export default Input
