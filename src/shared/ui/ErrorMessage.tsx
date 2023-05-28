import { FC } from 'react'
import { DivProps } from 'react-html-props'

interface ErrorMessageProps extends DivProps {}

const ErrorMessage: FC<ErrorMessageProps> = ({ children }) => {
	return (
		<div className="text-c3 rounded-lg bg-rose-600 px-5 py-2">
			Произошла ошибка: {children}
		</div>
	)
}

export default ErrorMessage
