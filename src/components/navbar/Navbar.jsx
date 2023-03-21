import React from "react";

const Navbar = () => {
    return(
        <>
            <nav className="nav">
                <div className = 'nav__content'>
                    <div classNAme='nav__logo__container'>logo</div>
                    
                    <div className='nav__list__container'>
                    <div>
                        Home
                    </div>
                    <div>
                        Contact
                    </div>
                    <div>
                        Schedule
                    </div>
                    <div>
                        Sign Up
                    </div>
                    </div>
                    
                </div>
                
            </nav>
        </>
    )
}

export default Navbar;