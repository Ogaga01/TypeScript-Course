const loginUser = (name: string, email: string, isPaid: boolean = false) => {
    return 'User Logged In'
}

loginUser('Ogee', 'ogig')

const addNum = (amt: number): number => {
    return amt + 2
}

addNum(2)

// function myVal(val: number): boolean {
//     if (val > 5) {
//         return true
//     } else {
//         return 'Val is < five'
//     }
// }

// myVal(6)

const heroes = ['thor', 1, 'spiderman', 'black widow', 54]

heroes.map((hero) => {
    return `my name is ${hero}`
})

function logConsole(errmsg: string): void{
    console.log(errmsg)
}

function handleError(errmsg: string): never{
    throw new Error (errmsg)
}

export {}