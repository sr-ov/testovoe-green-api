import { FC, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from '../../shared/ui'
import { useLogin } from '../../features/auth'
import { useTextField } from '../../shared/lib'

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = () => {
	const navigate = useNavigate()
	const login = useLogin()
	const { value: instanceValue, onChange: onChangeInstanceValue } =
		useTextField()
	const { value: tokenValue, onChange: onChangeTokenValue } = useTextField()

	function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()

		if (!instanceValue.trim() || !tokenValue.trim()) {
			return
		}

		login({
			idInstance: instanceValue,
			apiTokenInstance: tokenValue,
			isAuth: true,
		})
		navigate('/')
	}

	return (
		<form
			className="rounded-lg border-c3 p-10 border min-w-[50%]"
			onSubmit={onSubmit}
		>
			<div className="text-c3 text-xl">Введите свои данные</div>
			<div className="mt-9 flex items-center justify-center text-neutral-500">
				<Input
					className="rounded-lg ring-c3 ring-1 py-2.5 px-5 w-full"
					placeholder="Введите idInstance"
					value={instanceValue}
					onChange={onChangeInstanceValue}
				/>
			</div>
			<div className="mt-6 flex items-center justify-center text-neutral-500">
				<Input
					className="rounded-lg ring-c3 ring-1 py-2.5 px-5 w-full"
					placeholder="Введите apiTokenInstance"
					value={tokenValue}
					onChange={onChangeTokenValue}
				/>
			</div>
			<div className="mt-6 flex text-neutral-800 font-semibold">
				<Button type="submit" className="rounded-lg bg-c2 px-5 py-2 text-c1">
					Войти
				</Button>
			</div>
		</form>
	)
}

export default LoginForm
