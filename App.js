import logo from './logo.svg';
import './App.css';
//Importing Bootstrap.css file
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//importing form component...
import Form from './form-handling/form';
//import FormSecond from './form-handling/form2';
//import Navigation from './form-handling/navigation';
//Importing Route  Link
//import {Route, Link} from 'react-router-dom';
import SimpleForm from './formik/compleate-formik-form';
import {Newform} from './new-form/form';
import { Newform2 } from './new-form-2/form';


function App() 
{
  return (
    <div className="App">

       {/*
       // form-handling/form.js
      <Navigation />

      <Form />
      */}  

      {/*<SimpleForm />*/}

      <Newform2 />

    </div>
  );
}

export default App;
