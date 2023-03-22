import React from 'react'

function NavTab({ currentPage, handlePageChange }){
    return (
        <nav className="navbar navbar-dark bg-dark">

       <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link text-white navbar-brand' : 'nav-link'}>
       <img src={require('./images/logo.png')} width="150" height="150" alt=""/>
       </a>

        {/* <ul className="nav nav-tabs"> */}
        <ul className="nav">
            <li className="nav-item">
                <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link text-white' : 'nav-link'}>About</a>
            </li>

            <li className="nav-item">
                <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link text-white' : 'nav-link'}>Contact</a>
            </li>

            <li className="nav-item">
                <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link text-white' : 'nav-link'}>Portfolio</a>
            </li>

            <li className="nav-item">
                <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link text-white' : 'nav-link'}>Resume</a>
            </li>
        </ul>

        </nav>
    )
}

export default NavTab