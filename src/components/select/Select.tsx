import React, {useState, KeyboardEvent, useEffect} from "react";
import styles from "./Select.module.css"

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onClick: (value: any) => void
    items: ItemType[]
}


export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onClick(value)
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {

        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onClick(pretendentElement.value)
                        break
                    }
                }
            }
        }
        if (e.key === "Enter" || e.key === "escape"){
            setActive(false)
        }
    }
    const selectedItem = props.items.find(f => f.value === props.value)
    const hoveredItem = props.items.find(f => f.value === hoveredElementValue)

    return (
        <>
            <select>
                <option value={"2"}>Minsk</option>
                <option value={"3"}>Moscow</option>
                <option value={"4"}>Kiev</option>
            </select>
            <div className={styles.select}>

                <h3 onClick={toggleItems}>{selectedItem && selectedItem.title}</h3>
                {active &&
                    <div>
                        {props.items.map(i => <div
                            onKeyUp={onKeyUp}
                            tabIndex={0}
                            onMouseEnter={() => {
                                setHoveredElementValue(i.value)
                            }}
                            className={styles.item + " " + (hoveredItem === i ? styles.selected : "")}
                            key={i.value}
                            onClick={() => {
                                onItemClick(i.value)
                            }}
                        >

                            {i.title}</div>)}
                    </div>
                }
            </div>
        </>
    )

}
