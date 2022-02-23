import React, {useState} from "react";


class NewAttempt extends React.Component {
    //This is a form
    // const [wordleResponse, setWordleResponse] = useState("");

    render() {
        return (
            <div className="ui main">
                <h2>New Word</h2>
                <div className="ui form">
                    <div className="field">
                        <input  placeholder="bgybg"
                                name="wordleResponse"
                                value=""/>
                    </div>
                    <button className="ui primary button" >Another word?</button>
                </div>
            </div>
        )
    }
}

export default NewAttempt;