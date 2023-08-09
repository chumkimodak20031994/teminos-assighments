import React from 'react';


const Repeat = () => {
    return (
        <div>
            <nav className="content navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid bg-white">
                    <span className="navbar-text">Temple universsity</span>
                    <form className="d-flex " role="search">
                        <input className="form-control me-2" type="search" placeholder="Search Dosen" aria-label="Search"></input>
                    </form>
                    <div className='d-flex'>
                        <ul>
                            <img className='' src="/assete/Rectangle.svg" alt="Bootstrap" width="30" height="34"></img>
                        </ul>
                    </div>
                </div>
            </nav>


            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <ul className='home'>
                        <a className="nav-link disabled" aria-disabled="true">program/</a>
                        <a className="nav-link active" aria-current="page" href="#">
                            <span className='home2'>First Year Students</span>
                        </a>

                    </ul>
                </div>
            </nav>


            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <span className="navbar-text">First Year Students</span>

                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Overview</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Insights</a>
                            </li>
                            <li className="nav-item nav nav nav-underline">
                                <a className="nav-link active" aria-current="page" href="#"><span className='red'>Users</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Matches</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Setting</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>


            <div className="card text-bg-light m-0">
                <div>
                    <button type="button" className="btn-close float-end m-4" aria-label="Close"></button>
                </div>
            </div>

            <div class="card-group">
                <div class="card">
                    <div className='m-0'>
                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">
                                <img src="/assete/headerbg.svg" className="card-img" alt="..."></img>
                                <div className="card-img-overlay d-flex">
                                    <img className='img-fluid m-2' src="/assete/Rectangle (1).svg" alt="Bootstrap" width="100" height="100"></img>

                                    <h6 className='m-4'>Jonathan Javelle
                                        <br />
                                        <span className='m-2'>Jonathan @ gmail.com +1 123-456-789</span>
                                    </h6>
                                    <a href=''><button className='m-4 br-4 g-4 text-primary border border-primary'>student</button></a>

                                    <a href=""> <button type="button" className="m-4 ml-10 btn btn-primary h-20  w-70">Public Profile</button></a>


                                </div>

                            </div>
                        </nav>
                        <nav className="navbar navbar-expand-lg bg-body-tertiary m-0 bg-white">
                            <div className='container-fluid bg-white m-0'>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link disabled" aria-disabled="true">Major</a>
                                        <span>Digital Media</span>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" aria-disabled="true">year</a>
                                        <span>2016</span>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" aria-disabled="true">Country</a>
                                        <span>Ireland</span>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" aria-disabled="true">Role</a>
                                        <span>Mentee</span>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link disabled" aria-disabled="true">Gender</a>
                                        <span>Male</span>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" aria-disabled="true">Dob</a>
                                        <span>04/13/1985</span>
                                    </li>

                                </ul>
                            </div>
                        </nav>

                        <div className='card text-center m-0 bg-white'>
                            <ul className="nav nav-pills m-0 h-25 bg-white">

                                <li className="nav-item">
                                    <h4>Pograms</h4>
                                    <div className="button">
                                        <button type="button" className="btn btn-primary g-col-6 m-2">First year Student</button>
                                        <button type="button" className="btn btn-primary rounded-pill">mba</button>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div className='m-4'>
                        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-white mt-6">
                            <div className="container-fluid bg-white">
                                <ul className='home'>
                                    <h4>
                                        <a className="nav-link disabled" aria-disabled="true">profile infirmation</a>
                                    </h4>
                                </ul>
                            </div>
                        </nav>


                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className='container-fluid'>
                                <ul className="navbar-nav">

                                    <li className="nav-item">
                                        <a className="nav-link disabled" aria-disabled="true">Studebt number</a>
                                        <span>10123</span>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" aria-disabled="true">Deperment</a>
                                        <span>Design</span>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" aria-disabled="true">Year</a>
                                        <span>2016</span>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" aria-disabled="true">User Type</a>
                                        <span>Student</span>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" aria-disabled="true">College</a>
                                        <span>College of arts and science</span>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" aria-disabled="true">Minor</a>
                                        <span>Computer Science</span>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" aria-disabled="true">Length of course</a>
                                        <span>4 years</span>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="card text-center M-5">
                            <div className="card-header bg-white">
                                <ul className="nav nav-pills card-header-pills">
                                    <li className="nav-item">
                                        <a className="nav-link disabled" aria-disabled="true">pogram types</a>
                                        <span>Carear</span>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" aria-disabled="true">onbording status</a>
                                        <span>invites</span>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" aria-disabled="true">Linkedin url
                                        </a>
                                        <span>
                                            <img className='pic' src="/assete/link.png" alt="Bootstrap" width="5" height="5"></img>
                                        </span>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" aria-disabled="true">Dosen Url</a>
                                        <img className='pic' src="/assete/image 14 (1).svg" alt="Bootstrap" width="10" height="10"></img>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div >

                </div>

                <div className="card">
                    <div className='d-flex m-4'>
                        <h4 className='ml-4'>profile Details</h4>
                        <button type="button" className="btn-close position-absolute top-0 end-0 p-2" aria-label="Close"></button>
                    </div>

                    <div className="card-body">
                        <div className='d-flex'>
                            <img className='img-fluid m-2' src="/assete/Rectangle (1).svg" alt="Bootstrap" width="40" height="40"></img>
                            <h5 className="card-title m-4">Jonathan Javelle</h5><br />
                            <button type="button" className="btn btn-light"><img className='pic' src="/assete/image 14 (1).svg" alt="Bootstrap" width="10" height="10"></img>98</button>
                            <img className='pic m-4' src="/assete/Vector.svg" alt="Bootstrap" width="30" height="30"></img>
                            <img className='pic m-4' src="/assete/ic_fluent_edit_24_regular 4.svg" alt="Bootstrap" width="30" height="30"></img>
                        </div>
                        <p className='ml-4'>chief Executive officer dosen llc</p>
                        <button type="button" className="btn btn-outline-warning m-2">Alumni</button>
                        <div className='d-flex'>
                            <img className='img-fluid m-2' src="/assete/link.png" alt="Bootstrap" width="20" height="20"></img>
                            <img className='pic m-4' src="/assete/Group 1000003724.svg" alt="Bootstrap" width="30" height="30"></img>
                            <img className='pic m-4' src="/assete/Vector.svg" alt="Bootstrap" width="30" height="30"></img>
                            <img className='pic m-4' src="/assete/ic_fluent_edit_24_regular 4.svg" alt="Bootstrap" width="30" height="30"></img>
                        </div>
                        <div className='d-flex'>
                            <h3 className='m-4'>Digital intro</h3>
                            <img className='pic m-4' src="/assete/ic_fluent_edit_24_regular 4.svg" alt="Bootstrap" width="30" height="30"></img>
                        </div>
                        <img className='p-4 m-0' src="/assete/ezgif 1.svg" alt="Bootstrap" width="330" height="130"></img>
                    </div>
                    <p className="d-inline-flex gap-1">
                        <a href="#" className="btn active" role="button" data-bs-toggle="button" aria-pressed="true">Weaknes</a>
                        <a href="#" className="btn active" role="button" data-bs-toggle="button" aria-pressed="true">Coverletter</a>
                        <a href="#" className="btn active" role="button" data-bs-toggle="button" aria-pressed="true">Resume</a>
                    </p>
                    <p className="d-inline-flex gap-1">
                        <a href="#" className="btn active" role="button" data-bs-toggle="button" aria-pressed="true">Grit</a>
                        <a href="#" className="btn active" role="button" data-bs-toggle="button" aria-pressed="true">Linkedin</a>
                        <a href="#" className="btn active" role="button" data-bs-toggle="button" aria-pressed="true">Work expirenece</a>
                    </p>
                    <p className="d-inline-flex gap-2">
                        <a href="#" className="btn active" role="button" data-bs-toggle="button" aria-pressed="true">Strenghts</a>
                        <a href="#" className="btn active" role="button" data-bs-toggle="button" aria-pressed="true">Interview skills</a>

                    </p>
                    <div className='d-flex m-0'>
                        <h5 className='rounded-start m-4'>I can help with: </h5>
                        <img className='pic m-4' src="/assete/ic_fluent_edit_24_regular 4.svg" alt="Bootstrap" width="30" height="30"></img>

                    </div>
                </div>
            </div>



        </div >

    );
};


export default Repeat;