function brave(): {name: string, age: number}{
    return {name: 'Aghogho', age: 23}
}
brave()

// type aliases

type User = {
    name: string
    age: number
    isAvctive: boolean
    isPaid: boolean
}

const createUser = (user: User): User => {
    return {name: user.name, age: user.age, isAvctive: user.isAvctive, isPaid: user.isPaid}
}

console.log(createUser({ name: 'Jude', age: 42, isAvctive: true, isPaid: true }))

export {}