export const scrollChatToBottom = () => {
	document.querySelector('#scroll-here')?.scrollIntoView({
		behavior: 'smooth',
		block: 'end',
	})
}
