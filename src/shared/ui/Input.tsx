import { FC } from 'react'
import { InputProps } from 'react-html-props'

interface IInputProps extends InputProps {}

const Input: FC<IInputProps> = (props) => {
	return (
		<input
			className="rounded-lg text-c2 placeholder:text-c4 ring-c3 px-5 py-3"
			{...props}
		/>
	)
}

export default Input
