import { render } from "@testing-library/react";
import React from "react";

const Header= ()=> {
    return(
        <div className='ui dividing header centered'>
            Wordlet - <small>A wordle solver</small>
        </div>
    );
}

export default Header;