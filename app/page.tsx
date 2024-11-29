"use client"
import React from 'react';
import { useState } from 'react';
import ListGroup from './Mycomponent';
import 'bootstrap/dist/css/bootstrap.css'
import Alert from './Alert';
import button from './Button';
import Button from './Button';

function Page() {
  const [ alertVisible, setAlertVisibility] = useState(false);

  return(  
 <div>
  { alertVisible && <Alert> My alert</Alert>}
    < Button  color='primary' onClick={() => setAlertVisibility(true) } >My button</Button>
  </div>
  );
}
export default Page;