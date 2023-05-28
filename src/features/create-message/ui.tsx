import { FC, FormEvent, useRef, useEffect } from 'react'
import cn from 'clsx'
import { DivProps } from 'react-html-props'
import { useAsyncFn, useUnmount } from 'react-use'
import { Button, ErrorMessage, Spinner, Textarea } from '../../shared/ui'
import addMessageIcon from '../../assets/icons/add-message.svg'
import { useChat } from '../../entities/chat'
import { useTextField } from '../../shared/lib'
import { useSendMessage, useReceivedMessage } from '.'
import { useFnOnce } from '../../shared/lib'
import { scrollChatToBottom } from './lib'

interface CreateMessageProps extends DivProps {}

const CreateMessage: FC<CreateMessageProps> = ({ className, }) => {
	const intervalId = useRef(-1)
	const sendMessage = useSendMessage()
	const receivedMessage = useReceivedMessage()
	const receivedMessageOnce = useFnOnce(() => {
		intervalId.current = setInterval(receivedMessage, 5000)
	})
	const { value, onChange, setEmptyValue, isEmptyValue } = useTextField()
	const [{ loading, error }, doFetch] = useAsyncFn(async (message: string) => {
		await sendMessage(message)
		setEmptyValue()
	}, [])
	const isChatSelected = useChat(({ chatId }) => chatId)
	const messages = useChat(({ messages }) => messages)

	async function onSendMessage(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		await doFetch(value)
		receivedMessageOnce()
	}
	useEffect(scrollChatToBottom, [messages.length])
	useUnmount(() => clearInterval(intervalId.current))

	return (
		<form
			className={cn(
				'flex justify-center items-end gap-[10px] self-end relative',
				!isChatSelected && 'pointer-events-none blur-[50px]',
				className
			)}
			onSubmit={onSendMessage}
		>
			{error && (
				<ErrorMessage className="absolute -top-5 left-50 -translate-y-full">
					{error.message}
				</ErrorMessage>
			)}

			<Textarea
				className="w-[65%]"
				placeholder="Введите сообщение"
				disabled={loading}
				value={value}
				onChange={onChange}
			/>
			<Button
				className={cn(
					'bg-c2 py-2 px-4 w-[60px] h-[44px]',
					loading && '!opacity-100'
				)}
				disabled={isEmptyValue || loading}
			>
				{loading ? (
					<Spinner visible />
				) : (
					<img src={addMessageIcon} alt="" aria-hidden="true" />
				)}
			</Button>
		</form>
	)
}

export default CreateMessage
