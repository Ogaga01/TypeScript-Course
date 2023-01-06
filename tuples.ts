let tuple1: [string, number, boolean]
tuple1 = ['Fegz', 1, true]

// Tuples gives us the perfect ways to arrange an array.

type user = {
    name: string
    age: number
}

type User = [string, number, user]

const boy: User = ['fave', 2, {name: 'fave', age: 65}] // cannot be arranged in another way