import { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage, LoginPage } from '../pages'

const router = createBrowserRouter([
	// {
	// 	path: '/',
	// 	element: <Navigate to="/login" replace />,
	// },
	{
		path: '/',
		element: <HomePage />,
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
])

const Router: FC = () => {
	return <RouterProvider router={router} />
}

export default Router
