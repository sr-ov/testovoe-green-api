import { forwardRef } from 'react'
import { InputProps } from 'react-html-props'
import cn from 'clsx'

interface IInputProps extends InputProps {}

const Input = forwardRef<HTMLInputElement, IInputProps>(
	({ className, ...props }: IInputProps, ref) => {
		return (
			<input
				className={cn(
					'rounded-lg ring-1 bg-[transparent] text-c2 placeholder:text-c4 ring-c3 px-5',
					className
				)}
				{...props}
				ref={ref}
			/>
		)
	}
)

export default Input
