import { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from '../pages'
import { RequireAuth } from '../shared/lib'
import { useIsAuth } from '../entities/viewer'

const router = createBrowserRouter([
	{
		path: '/',
		Component() {
			return (
				<RequireAuth isAllowed={useIsAuth()}>
					<HomePage />
				</RequireAuth>
			)
		},
	},
	{
		path: '/login',
		lazy: async () => {
			const { LoginPage } = await import('../pages')
			return {
				Component: LoginPage,
			}
		},
	},
	{
		path: '*',
		lazy: async () => {
			const { NotFound } = await import('../pages')
			return {
				Component: NotFound,
			}
		},
	},
])

const Router: FC = () => {
	return <RouterProvider router={router} />
}

export default Router
