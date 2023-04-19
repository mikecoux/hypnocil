import React from "react"

function Header({ onSetSearch }) {
    return(
        <header>
            <div>
                <img src="./images/hypnocil-logo.png" alt="logo"/>
                <h1>Clinical Trials</h1>
            </div>
            <input id="search" type="text" placeholder="Search..." onChange={(e) => onSetSearch(e.target.value)}></input>
        </header>
    );
}

export default Header;