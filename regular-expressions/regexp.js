let phoneNumber = /^1[34578]\d{9}$/

phoneNumber.test('18812011232')
phoneNumber.test('18812312')
phoneNumber.test('12345678909')

let repeatWords = /(\b\w+\b) \1/

repeatWords.test('foo foo bar')
repeatWords.test('foo bar foo')
repeatWords.test('foo  barbar bar')
