import { useLocalStorage } from 'react-use'
import { useViewer, IViewer } from '../../entities/viewer'

export function useCheckAuth() {
	const [viewer, setViewer] = useLocalStorage<IViewer>('viewer')
	const login = useViewer((state) => state.login)

	if (!viewer) {
		return false
	}

	login(viewer.idInstance, viewer.apiTokenInstance)
	return true
}

export function useIsAuth() {
	const isAuth = useViewer((state) => state.isAuth)
	return isAuth
}
