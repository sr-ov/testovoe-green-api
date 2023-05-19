import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface IViewer {
	isAuth: boolean
	idInstance: string
	apiTokenInstance: string
}

interface Actions {
	login: (idInstance: string, apiTokenInstance: string) => void
	logout: () => void
}

const initialState = (): IViewer => ({
	isAuth: false,
	idInstance: '',
	apiTokenInstance: '',
})

export const useViewer = create<IViewer & Actions>()(
	persist(
		(set) => ({
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
		}),
		{
			name: 'viewer',
			storage: createJSONStorage(() => window.localStorage),
		}
	)
)

export function useIsAuth() {
	const isAuth = useViewer((state) => state.isAuth)
	return isAuth
}
