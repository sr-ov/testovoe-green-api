import { FC } from 'react'
import { Link } from 'react-router-dom'
import { DivProps } from 'react-html-props'

interface NotFoundProps extends DivProps {}

const NotFound: FC<NotFoundProps> = () => {
	return (
		<main className="grid items-center justify-center min-h-screen">
			<h1 className="col-start-1 col-end-[-1] row-start-1 row-end-[-1] text-[333px] text-c2 blur-[25px]">
				404
			</h1>
			<div className="col-start-1 col-end-[-1] row-start-1 row-end-[-1] z-10 text-center">
				<p className="text-[32px] mb-10 text-c3">Этой страницы не существует</p>
				<Link
					className="rounded-lg bg-c2 px-4 py-2 text-c1 text-2xl font-semibold"
					to={'/'}
				>
					На главную
				</Link>
			</div>
		</main>
	)
}

export default NotFound
