import React from 'react'
import Accordion from './Accordion'
import DigitalClock from './DigitalClock';

function Home() {
    const items = [
        { id:1,
          title: 'Section 1',
          content: 'Content for Section 1',
        },
        {
          id:2,
          title: 'Section 2',
          content: 'Content for Section 2',
        },
        {
          id:3,
          title: 'Section 3',
          content: 'Content for Section 3',
        },
      ];
  return (
    <div>Home
        <h1>Accordion</h1>
        <i class="fa fa-car" style={{color:"red"}}>dddd</i>
        <Accordion items={items}></Accordion>
        <DigitalClock></DigitalClock>
    </div>
  )
}

export default Home