import { FC } from 'react'
import { LoginForm } from '../features/auth'

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = (props) => {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<LoginForm />
		</div>
	)
}

export default LoginPage
