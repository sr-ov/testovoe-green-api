import { MainLayout } from '../shared/ui'
import Router from './Router'
import { useCheckAuth } from '../features/auth'

function App() {
	const v = useCheckAuth()
	console.log({ v })
	return (
		<MainLayout>
			<Router />
		</MainLayout>
	)
}

export default App
