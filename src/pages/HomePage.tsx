import { FC } from 'react'

import { RequireAuth } from '../shared/lib'
import { useIsAuth } from '../entities/viewer'
import { Chat } from '../widgets/chat'
import { Sidebar } from '../widgets/sidebar'

interface HomePageProps {}

const HomePage: FC<HomePageProps> = (props) => {
	return (
		<RequireAuth isAllowed={useIsAuth()}>
			<main className="grid grid-cols-12 gap-5 min-h-screen">
				<Sidebar />
				<Chat />
			</main>
		</RequireAuth>
	)
}

export default HomePage
