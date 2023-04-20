import React, {useMemo, useState} from "react";

export default {
    title: 'React.memo demo',
    // component: Button,
}


export const Example1 = () => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultA *= i
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
            <hr/>
            <div>
                result for a: {resultA}
            </div>
            <div>
                result for b: {resultB}
            </div>
        </>
    )
}


const UsersSecret = (props: { users: Array<string> }) => {
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}
const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["awdaw", "dwadaw", "wadaw", "wwwww"])


    const newArray = useMemo(() => {
        return users.filter(f => f.toLowerCase().indexOf("a") > -1)
    }, [users])


    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Users users={newArray}/>
        </>
    )
}


export const LikeUseCallback = () => {
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["awdaw", "dwadaw", "wadaw", "wwwww"])


    const newArray = useMemo(() => {
        return books.filter(f => f.toLowerCase().indexOf("a") > -1)
    }, [books])



    const addBook = () => {
        const newBooks = [...books, "Angular" + new Date().getTime()]
        setBooks(newBooks)
    }

    const memoizedAddBook = useMemo(()=>addBook, [books])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Books addBook ={memoizedAddBook}/>
        </>
    )
}


const BooksSecret = (props: { addBook: ()=>void }) => {
    return (
        <div>
            <button onClick={()=>props.addBook()}></button>
        </div>
    )
}
const Books = React.memo(BooksSecret)