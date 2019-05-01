import React from 'react'

const Form = () => {
    return (
        <div className="modal fade" id="modalCenter" tabIndex="-1" role="dialog" aria-labelledby="modalCenterTitle" aria-hidden="false">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalCenterTitle">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="false">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        ...
      </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

        // <div>
        //     <p>
        //         <label for="category">Category </label>
        //         <select id="category">
        //             <option value>Please choose a category...</option>
        //             <option value>Dick pics</option>
        //             <option value>Jackass</option>
        //             <option value>Just being a dick</option>
        //         </select>
        //     </p>
        //     <p>
        //         <label for="rank">Rank</label>
        //         <select id="rank">
        //             <option value>Please choose a degree of burn...</option>
        //             <option value>Whimsical</option>
        //             <option value>Gonna need some Aloe Vera</option>
        //             <option value>Manhood ruined</option>
        //         </select>
        //     </p>
        //     <p><button type="submit">Submit</button></p>
        // </div>
    )
}

export default Form