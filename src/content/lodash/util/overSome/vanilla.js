const overSome = checks => item => checks.some(check => check(item))

const func = overSome([Boolean, isFinite])

exports.string = func('1')
// => true

exports.null = func(null)
// => true

exports.nan = func(NaN)
// => false
