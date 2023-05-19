import { useLocalStorage } from 'react-use'
import { useViewer, IViewer } from '../../entities/viewer'

export function useCheckAuth() {
	const [viewer] = useLocalStorage<{ state: IViewer }>('viewer')
	const login = useViewer((state) => state.login)

	if (!viewer?.state?.isAuth) {
		return false
	}

	const { idInstance, apiTokenInstance } = viewer.state
	login(idInstance, apiTokenInstance)
	return true
}

export function useLogin() {
	const login = useViewer((state) => state.login)
	return (viewer: IViewer) => login(viewer.idInstance, viewer.apiTokenInstance)
}

export function useLogout() {
	const logout = useViewer((state) => state.logout)
	return logout
}

export function useIsAuth() {
	return useViewer((state) => state.isAuth)
}
