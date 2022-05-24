import './App.css';
import React from "react";
import Mytables from './contenu';
import SearchBar from './searchBar';
import table from './tables';
import foote from './nom';
import expirate from './année';
import Myid from './className';
import { Table } from 'react-bootstrap';
import { Form , FormControl} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
/* année */
const expiration = expirate();
/* className collapse */
const clas = Myid.id;
/* clé du tableau */
const foot = foote() ;

function App() {
    
    return (
    <div className="App">
    <body class="sb-nav-fixed">
          <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a class="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
            <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <SearchBar/>
            </form>
            <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li class="nav-item dropdown">
                                    <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-pro">
                    <svg class="svg-inline--fa fa-user fa-fw" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 10 448 512" data-fa-i2svg="">
                        <path fill="white" d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z">
                        </path>
                    </svg>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Settings</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Activity Log</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </li>
            </ul>
        </nav>
      <div id="layoutSidenav">  
      <div id="layoutSidenav_nav">
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <a className="nav-link" href="index.html">
                                <div className={clas}><i className="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </a>
                            <div className="sb-sidenav-menu-heading">Interface</div>
                            <a className="nav-link collapsed" href="#" data-bs-toggle={Myid} data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className={clas}><i className="fas fa-columns"></i></div>
                                Layouts
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                                <nav class="sb-sidenav-menu-nested nav">
                                    <a class="nav-link" href="layout-static.html">Static Navigation</a>
                                    <a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                                </nav>
                            <a className="nav-link collapsed" href="#" data-bs-toggle={Myid} data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className={clas}><i className="fas fa-book-open"></i></div>
                                Pages
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className={Myid} id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a className="nav-link collapsed" href="#" data-bs-toggle={Myid} data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        Authentication
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className={Myid} id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" href="login.html" aria-label='blue'>Login</a>
                                            <a className="nav-link" href="register.html">Register</a>
                                            <a className="nav-link" href="password.html">Forgot Password</a>
                                        </nav>
                                    </div>
                                    <a className="nav-link collapsed" href="#" data-bs-toggle={Myid} data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                        Error
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className={Myid} id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" href="401.html">401 Page</a>
                                            <a className="nav-link" href="404.html">404 Page</a>
                                            <a className="nav-link" href="500.html">500 Page</a>
                                        </nav>
                                    </div>
                                </nav>
                            </div>
                            <div className="sb-sidenav-menu-heading">Addons</div>
                            <a className="nav-link" href="charts.html">
                                <div className={clas}><i className="fas fa-chart-area"></i></div>
                                Charts
                            </a>
                            <a className="nav-link" href="tables.html">
                                <div className={clas}><i className="fas fa-table"></i></div>
                                Tables
                            </a>
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                       <p>Start Bootstrap</p> 
                    </div>
                </nav>
            </div>
             <div id="layoutSidenav_content">         
                <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">Tables</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li className="breadcrumb-item active">Tables</li>
                        </ol>
                        <div className="card mb-4">
                            <div className="card-body">
                                DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the
                                <a target="_blank" href="https://datatables.net/">official DataTables documentation</a>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-header">
                            <i class="fas fa-table me-1"></i>
                                DataTable Example
                            </div>
                            <div className="card-body-md-6">  
                            <div className="dataTable-top">
                                <div className="dataTable-dropdown">
                                <label><select className="dataTable-selector">
                                    <option value="5">5</option><option value="10" selected="">10</option><option value="15">15</option><option value="20">20</option><option value="25">25</option></select> entries per page</label></div><div class="dataTable-search">
                                </div>
                                <Form className="d-flex">
                                    <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    />
                                </Form>
                                </div>
                            </div>
                                    <Table id="datatablesSimple " striped bordered hover responsive="xl">
                                        <thead>    
                                        {foot}
                                        </thead>
                                        <tfoot>
                                        {foot}
                                        </tfoot>
                                        <tbody>
                                        {
                                            table.map((tables)=>
                                            <Mytables key={tables.Age} Name={tables.Name} Age={tables.Age} Position={tables.Position} Office={tables.Office} Start={tables.Start} Salary={tables.Salary}  />
                                            )
                                        } 
                                        </tbody>
                                    </Table>
                        <div className="dataTable-top">
                <div class="dataTable-info">Showing 1 to 10 of 57 entries </div>
                            <nav class="dataTable-pagination">
                        <ul class="dataTable-pagination-list"><li class="active">
                            <a href="#" data-page="1">1</a></li><li class=""><a href="#" data-page="2">2</a>
                            </li>
                            <li class=""><a href="#" data-page="3">3</a></li><li class="">
                                <a href="#" data-page="4">4</a></li><li class=""><a href="#" data-page="5">5</a></li><li class="">
                                    <a href="#" data-page="6">6</a></li><li class="pager"><a href="#" data-page="2">›</a>
                            </li>
                        </ul>
                            </nav>
                </div>
                        </div>
            </div>
        </main>
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Your Website {expiration}</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
     </body>
  </div>
  );
}


export default App;