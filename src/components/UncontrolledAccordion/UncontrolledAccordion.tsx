import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle setCollapsed={setCollapsed} collapsed={collapsed}  title={props.titleValue}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )



}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: (collapsed:boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return(
        <h3 onClick={() => {props.setCollapsed(!props.collapsed)}}>{props.title}</h3>
    )
}

function AccordionBody() {
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )
}

export default UncontrolledAccordion;