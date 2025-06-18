const isEmpty = (value) => {
    if (!value) {
        return {error: "Field is required"}
    }
    return false
}

const isEmail = (value) => {
    if (value.toLowerCase().match('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$') === null) {
        return {error: "Invalid email"}
    }
    return false
}

const passwordLengthValidate = (value) => {
    if (value.toLowerCase().match('^.{8,}$') === null) {
        return {error: "Password must be at least 8 characters"}
    }
}

const passwordValidate = (value) => {
    if (value.toLowerCase().match('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$') === null) {
        return {error: "Password must contain at least one symbol"}
    }
}

const rules = {}

rules.username = [isEmpty]
rules.password = [isEmpty, passwordLengthValidate, passwordValidate]
rules.email = [isEmpty, isEmail]

export const validator = new Proxy(rules, {
    get(target, prop) {
        return function (value) {
            const res = target[prop]
            for (const resKey in res) {
                if (!res[resKey](value)) continue
                return res[resKey](value).error
            }
        }
    }
})