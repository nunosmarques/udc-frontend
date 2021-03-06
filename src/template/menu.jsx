import React from 'react'

export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className="container">
            <div className="navbar-header">
                <a className="navbar-brand" href="#/todos">
                    <i className="fa fa-calendar-check-o">TodoApp</i>
                </a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li><a href="#/todos">Tasks</a></li>
                    <li><a href="#/about">About</a></li>
                    <li><a href="#/mytest">Test</a></li>
                </ul>
            </div>
        </div>
    </nav>
)