import { compose, isEmpty, trim } from 'ramda'

export const isEmptyStr = compose(isEmpty, trim)
