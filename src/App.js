import './App.css';
import React, {Suspense} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Spinner} from 'react-bootstrap';

const Navbar = React.lazy(() => import('./Navbar'));
const Header = React.lazy(() => import('./Header'));
const Moi = React.lazy(() => import("./Moi"));
const Contactbottom = React.lazy(() => import("./Contactbottom"));
const Competences = React.lazy(() => import("./Competences"));
const Footer = React.lazy(()=>import('./Footer'))
function App() {
  let load = <div className="containerloading"><Spinner animation="border" variant="warning" className="loading"/><div id="contentload">Chidiac GABA</div></div>
  return (
    <Suspense fallback={load} >
     <Navbar />
    <Header />
    <Moi />
    <Competences />
    <Contactbottom />
    <Footer />
    </Suspense>
  );
}

export default App;
