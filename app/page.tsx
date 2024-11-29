"use client"
import React from 'react';
import ListGroup from './Mycomponent';
import 'bootstrap/dist/css/bootstrap.css'
import Alert from './Alert';
import button from './Button';

function Page() {
const [ alertVisible, setAlertVisibility] = useState(false);

  return( 
 <div>
    { alertVisible && <Alert>My alert</Alert>}
  <button color="Primary"  onClick={() => setAlertVisibility(true)  }>
    My button
    </button> 
  </div>
  );
}
export default Page;