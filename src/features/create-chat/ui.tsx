import { FC, FormEvent, useRef } from 'react'
import { useToggle } from 'react-use'
import ReactModal from 'react-modal'
import { Button, Input } from '../../shared/ui'
import addChatIcon from '../../assets/icons/add-chat.svg'
import { useTextField } from '../../shared/lib'
import { toggleBlurFilter } from '.'
import { useChat } from '../../entities/chat'

ReactModal.setAppElement('#root')

interface CreateChatProps {}

const CreateChat: FC<CreateChatProps> = () => {
	const inputRef = useRef<HTMLInputElement>(null)
	const setChat = useChat(({ setChat }) => setChat)
	const [open, toggleOpen] = useToggle(false)
	const onOpenModal = () => toggleOpen(true)
	const onCloseModal = () => toggleOpen(false)
	const {
		value: phoneValue,
		onChange: onChangePhoneValue,
		isEmptyValue,
	} = useTextField()

	function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const chatId = phoneValue.replace(/[^0-9]/g, '') + '@c.us'
		setChat(chatId, phoneValue)
		onCloseModal()
	}

	function onAfterOpen() {
		toggleBlurFilter()
		inputRef.current?.focus()
	}
	function onAfterClose() {
		toggleBlurFilter()
		inputRef.current?.blur()
	}

	return (
		<>
			<Button
				className="font-bold bg-c2 text-c1 mb-[60px] py-5 px-4 w-full text-right !text-[18px] block"
				onClick={onOpenModal}
			>
				Создать чат
			</Button>
			<ReactModal
				isOpen={open}
				onRequestClose={onCloseModal}
				onAfterOpen={onAfterOpen}
				onAfterClose={onAfterClose}
			>
				<form className="flex space-x-2.5" onSubmit={onSubmit}>
					<Input
						type="text"
						placeholder="Введите номер"
						className="w-full rounded-lg ring-1 ring-c3 px-5 py-2.5"
						value={phoneValue}
						onChange={onChangePhoneValue}
						ref={inputRef}
					/>
					<Button
						type="submit"
						className="rounded-lg bg-c2 px-5 py-2 text-c1"
						disabled={isEmptyValue}
					>
						<img src={addChatIcon} alt="" aria-hidden="true" width={38} />
					</Button>
				</form>
			</ReactModal>
		</>
	)
}

export default CreateChat
