import { FC } from 'react'
import ReactSpinner from 'react-spinner-material'

interface SpinnerProps {
	visible: boolean
}

const Spinner: FC<SpinnerProps> = ({ visible }) => {
	return (
		<ReactSpinner radius={28} color={'#2b2b2b'} stroke={3} visible={visible} />
	)
}

export default Spinner
