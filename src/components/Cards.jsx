import React from 'react'

// >>>>>> Elected to keep id for future troubleshooting <<<<<<
const Card = ({ copy, id, quote }) => {
    return (
        <div className="card">
            <div className="card-body" onClick={(e) => copy(e, quote)}>
                {quote}
            </div>
        </div>
    )
}

export default Card