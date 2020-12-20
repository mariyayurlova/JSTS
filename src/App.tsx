import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';
import {Rating} from "./components/Raiting/Rating";
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';

function App() {
  return (
   <div>
       <OnOff />


       <UncontrolledAccordion titleValue={"Menu"} collapsed={true}/>
       <UncontrolledAccordion titleValue={"Users"} collapsed={false}/>


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
