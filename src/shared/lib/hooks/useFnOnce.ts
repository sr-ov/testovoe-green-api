import { useRef, useCallback } from 'react'

export function useFnOnce(fn: VoidFunction): VoidFunction {
	const calledOnceRef = useRef(false)

	function wrappedFn() {
		if (!calledOnceRef.current) {
			calledOnceRef.current = true
			fn()
		}
	}

	return useCallback(wrappedFn, [])
}
