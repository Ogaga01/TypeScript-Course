let myArray: (string | number)[] = []

let boys: boolean | number = 6
boys = true

type User = {
    name: string
    id: number
}

type Admin = {
    userName: string
    id: number
}

const secondArray: (User | Admin | string)[] = []

export {}