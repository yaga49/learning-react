import React, {useState} from 'react';

type AccordionPropsType ={
    titleValue: string
    // collapsed: boolean
}

type AccordionTitlePropsType ={
    value: string
}
export function UnControllerAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)



        return (
            <div>
                <AccordionTitle value={props.titleValue }/>
                <button onClick={()=>{setCollapsed(!collapsed)}}>toggle</button>
                {collapsed===false && <AccordionBody/>}

            </div>
        )

};

function AccordionTitle(props: AccordionTitlePropsType){
    return(
        <h3>
            {props.value}
        </h3>
    )
}

function AccordionBody(){
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
