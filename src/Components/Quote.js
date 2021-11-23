import React from 'react'
import './Quote.css';
import pic from './Images/building.jpg'

function Quote() {
    return (
        <div className="quoteContent" style={{
            background: 'rgba(0, 0, 0, 0.5)',
            backgroundImage: `url(${pic})`,
            backgroundSize:`cover`,
            backgroundRepeat: `no-repeat`,
            display: `flex`,
            height: `749px`,
        }}>
            
            <div className="content">
                <h1 className="logo">Oasis.</h1>
                <style>
                @import url('https://fonts.googleapis.com/css2?family=Raleway&family=Source+Sans+Pro:wght@200&display=swap');
                </style>    
                <h2 className="quote">"The passage experienced a surge in popularity during the 1960s when Letraset used in on their dry-transfer sheets,
                 and again during the 90s as desktop publishers bundled the text with their software."
                </h2>
                <h1 className="quoteAuthor">Vincent Obi</h1>
            </div>
        </div>

        
    )
}

export default Quote

