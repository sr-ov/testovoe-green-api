import { FC } from 'react'
import { DivProps } from 'react-html-props'

interface MainLayoutProps extends DivProps {}

const MainLayout: FC<MainLayoutProps> = ({ children, ...props }) => {
	return (
		<div className="min-h-screen">
			<div className="max-w-[1024px] px-4 mx-auto min-h-screen">{children}</div>
		</div>
	)
}

export default MainLayout
