import { FC } from 'react'
import { ButtonProps } from 'react-html-props'

interface IButtonProps extends ButtonProps {}

const Button: FC<IButtonProps> = ({ children, ...props }) => {
	return (
		<button className="rounded-lg text-base" {...props}>
			{children}
		</button>
	)
}

export default Button
