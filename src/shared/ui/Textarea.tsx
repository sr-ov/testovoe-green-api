import { FC } from 'react'
import cn from 'clsx'
import TextareaAutosize, {
	TextareaAutosizeProps,
} from 'react-textarea-autosize'

interface TextareaProps extends TextareaAutosizeProps {}

const Textarea: FC<TextareaProps> = ({ className, ...props }) => {
	return (
		<TextareaAutosize
			className={cn(
				'resize-none rounded-lg ring-1 bg-[transparent] text-c2 placeholder:text-c4 ring-c3 px-5 py-[9.5px]',
				className
			)}
			{...props}
		/>
	)
}

export default Textarea
