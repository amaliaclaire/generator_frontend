import React from 'react'

// >>>>>> Elected to keep id for future troubleshooting <<<<<<
const Card = ({ copy, id, quote }) => {
    return (
        <div className="card">
            <div className="card-body">
                {quote}
                <button type="button" className="btn btn-clipboard" onClick={(e) => copy(e, quote)}>Copy</button>
            </div>
        </div>
    )
}

export default Card