import { create } from 'zustand'

export interface IViewer {
	isAuth: boolean
	idInstance: string
	apiTokenInstance: string
}

export interface IViewerStore extends IViewer {
	login: (idInstance: string, apiTokenInstance: string) => void
	logout: () => void
}

const initialState = (): IViewer => ({
	isAuth: false,
	idInstance: '',
	apiTokenInstance: '',
})

export const useViewer = create<IViewerStore>((set) => ({
	...initialState(),

	login(idInstance: string, apiTokenInstance: string) {
		set(() => ({
			isAuth: true,
			idInstance,
			apiTokenInstance,
		}))
	},

	logout() {
		set(() => initialState())
	},
}))

export function useIsAuth() {
	const isAuth = useViewer((state) => state.isAuth)
	return isAuth
}
