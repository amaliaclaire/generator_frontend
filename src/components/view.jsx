import React, { Component } from 'react'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Card from './Cards'

class View extends Component {
    constructor(toggleView) {
        super()
        this.status = toggleView
    }

    componentDidMount() {
        $('#formModal').modal({ backdrop: 'static', keyboard: false })
    }
    render() {
        return (
            <div>
                <div className="modal fade" id="formModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Sassy Responses Generator</h5>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <Card />
                                </div >
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={this.status.toggleView}>Return</button>
                                <button type="button" className="btn btn-primary">Load More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default View