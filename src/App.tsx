import React, { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';
import {Rating, RatingValueType} from "./components/Raiting/Rating";
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating';
import UncontrolledOnOff from './components/UncotrolledOnOff/UncontrolledOnOff';

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(true)

  return (
   <div>
       <OnOff on={switchOn} onChange={setSwitchOn}/>
       <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}


       <UncontrolledAccordion titleValue={"Menu"} />
       <UncontrolledAccordion titleValue={"Users"} />
       <UncontrolledRating/>
       <Rating value={ratingValue} onClick={setRatingValue}/>
       <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>

       {/*<PageTitle title={"This is APP component"}/>*/}
       {/*<Rating value={3}/>*/}

       {/*<Rating value={0}/>*/}
       {/*<Rating value={1}/>*/}
       {/*<Rating value={2}/>*/}
       {/*<Rating value={3}/>*/}
       {/*<Rating value={4}/>*/}
       {/*<Rating value={5}/>*/}
   </div>
  );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
