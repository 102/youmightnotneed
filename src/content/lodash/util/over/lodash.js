// https://lodash.com/docs/#over
import { over } from 'lodash'

const func = over([Math.max, Math.min])

module.exports = func(1, 2, 3, 4)
// => [4, 1]
