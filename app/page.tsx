"use client"
import React from 'react';
import ListGroup from './Mycomponent';
import 'bootstrap/dist/css/bootstrap.css'
import Alert from './Alert';
import button from './Button';

function Page() {
  let items = [ "New york", "San Francisco", "Tokyo" , "London", "Paris"];

  return(  
 <div>
    <ListGroup  items={items} heading='cities'/>
  </div>
  );
}
export default Page;