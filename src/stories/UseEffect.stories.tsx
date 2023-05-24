import React, {useEffect, useState} from "react";

export default {
    title: 'useState demo',

}


export const Example1 = () => {
    const [count, setCount] = useState(0)
    const [fake, setFake] = useState(0)

    useEffect(()=>{
        console.log("useEffect every render")
    })
    useEffect(()=>{
        console.log("useEffect first render(componentDidMount)")
    }, [])
    useEffect(()=>{
        console.log("useEffect first render and every counter change")
    },[count])


    return (
        <>
            <button onClick={()=>{setFake(fake+1)}}>fake+</button>
            <button onClick={()=>{setCount(count+1)}}>count+</button>

            count {count},fake {fake}
        </>
    )
}


export const Example2 = () => {
    const [time, setTime] = useState(new Date());

    // Обновляем время каждую секунду
    useEffect(() => {
        const timerID = setInterval(() => setTime(new Date()), 1000);

        // Очищаем таймер при удалении компонента
        return () => clearInterval(timerID);
    }, []);

    // Форматируем время в строку и выводим на экран
    const formattedTime = time.toLocaleTimeString();
    return <p>Текущее время: {formattedTime}</p>;
}

