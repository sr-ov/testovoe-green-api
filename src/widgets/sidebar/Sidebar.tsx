import { FC } from 'react'
import { Button } from '../../shared/ui'
import { Chats } from '../../entities/chat'

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = (props) => {
	return (
		<div className="col-span-3 border-r-[1px] border-r-c3 py-5 pr-5 ml-[calc(50%-50vw)]">
			<Button className="font-bold bg-c2 text-c1 mb-[60px] py-3 px-4 w-full text-right text-[18px] block">
				Создать чат
			</Button>
			<Chats />
		</div>
	)
}

export default Sidebar
