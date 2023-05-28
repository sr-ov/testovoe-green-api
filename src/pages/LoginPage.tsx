import { FC } from 'react'
import { LoginForm } from '../features/auth'

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
	return (
		<main className="flex items-center justify-center min-h-screen">
			<LoginForm />
		</main>
	)
}

export default LoginPage
