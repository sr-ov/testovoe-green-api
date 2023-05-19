import { FC } from 'react'
import { DivProps } from 'react-html-props'
import { Navigate } from 'react-router-dom'

interface RequireAuthProps extends DivProps {
	redirectTo?: string
	isAllowed: boolean
}

const RequireAuth: FC<RequireAuthProps> = ({
	isAllowed,
	redirectTo = '/login',
	children,
	...props
}) => {
	return isAllowed ? <>{children}</> : <Navigate to={redirectTo} replace />
}

export default RequireAuth
