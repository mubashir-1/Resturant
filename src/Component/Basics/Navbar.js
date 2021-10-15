import React from 'react'

export default function Navbar({ filterItem, menulist }) {
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">

                    {menulist.map((currentElement) => {
                            return (<button className="btn-group__item" onClick={() => filterItem(currentElement)}> {currentElement}</button>)
                     
                        })
                    }
                </div>
            </nav>
        </>
    )
}
