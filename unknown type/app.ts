let userInput: unknown
let userName: string

userInput = 5;
userInput = 'Max'
// better to use unknown than any for unknown userInput
if (typeof userInput === 'string') {
    userName = userInput
}

// never type: throw trashes the script, never returns anything
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code}
}

generateError('An error occurred!', 500)