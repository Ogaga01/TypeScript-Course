interface Creator {
    name: string
    age: number
    isPaid: boolean
    getCoupon(amount: number): number
    readonly dbId: number
    googleId?: string
}

const user1: Creator = {
    name: 'poyoyo',
    age: 54,
    isPaid: false,
    getCoupon(amount: 50) {
        return 50
    },
    dbId: 4,
    isActive: true
}

interface Creator {
    isActive: boolean
}

// The major difference between interface and types is that interface accepts functions, while types do not

interface Admin extends Creator {
    role: 'admin' | 'user' | 'ceo'
}