// https://date-fns.org/v2.13.0/docs/min
const min = require('date-fns/min')

// Which of these dates is the earliest?
module.exports = min([
  new Date(1989, 6, 10),
  new Date(1987, 1, 11),
  new Date(1995, 6, 2),
  new Date(1990, 0, 1),
])
// => Wed Feb 11 1987 00:00:00
