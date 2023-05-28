import { ChangeEvent, useRef, useState, useCallback } from 'react'
import { isEmptyStr } from '..'

export type TextField = HTMLTextAreaElement & HTMLInputElement

export const useTextField = (initialValue = '') => {
	const [value, setValue] = useState(initialValue)
	const _initialValue = useRef(initialValue)

	const resetValue = useCallback(() => {
		setValue(_initialValue.current)
	}, [])

	const setEmptyValue = useCallback(() => {
		setValue('')
	}, [])

	const onChange = useCallback((e: ChangeEvent<TextField>) => {
		setValue(e.currentTarget.value)
	}, [])

	return {
		setValue,
		value,
		onChange,
		resetValue,
		setEmptyValue,
		isEmptyValue: isEmptyStr(value),
	}
}
