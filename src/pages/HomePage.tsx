import { FC } from 'react'
import { Chat } from '../widgets/chat'
import { Sidebar } from '../widgets/sidebar'

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
	return (
		<main className="grid grid-cols-12 gap-5 min-h-screen">
			<Sidebar />
			<Chat />
		</main>
	)
}

export default HomePage
