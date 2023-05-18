import { FC } from 'react'
import { Button, Input } from '../../shared/ui'
import addMessageIcon from '../../assets/icons/add-message.svg'

interface CreateChatProps {}

const CreateChat: FC<CreateChatProps> = (props) => {
	return (
		<div className="flex justify-center gap-[10px] self-end">
			<Input className="w-[65%]" placeholder="Введите сообщение" />
			<Button className="bg-c2 py-2 px-4">
				<img src={addMessageIcon} alt="" aria-hidden="true" />
			</Button>
		</div>
	)
}

export default CreateChat
