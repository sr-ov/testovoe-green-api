import { FC } from 'react'
import { ButtonProps } from 'react-html-props'
import cn from 'clsx'

interface IButtonProps extends ButtonProps {}

const Button: FC<IButtonProps> = ({ children, className, ...props }) => {
	return (
		<button className={cn('rounded-lg text-base', className)} {...props}>
			{children}
		</button>
	)
}

export default Button
