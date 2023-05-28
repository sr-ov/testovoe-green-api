import { FC } from 'react'
import { Chats } from '../../entities/chat'
import { CreateChat } from '../../features/create-chat'

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
	return (
		<div className="col-span-3 border-r-[1px] border-r-c3 py-10 pr-5 ml-[calc(50%-50vw)]">
			<CreateChat />
			<Chats />
		</div>
	)
}

export default Sidebar
