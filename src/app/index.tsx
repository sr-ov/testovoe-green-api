import { MainLayout } from '../shared/ui'
import Router from './Router'
import { useCheckAuth } from '../features/auth'

function App() {
	useCheckAuth()

	return (
		<MainLayout>
			<Router />
		</MainLayout>
	)
}

export default App
