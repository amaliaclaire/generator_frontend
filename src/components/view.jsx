import React, { Component } from 'react'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'

class View extends Component {
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
                                    <div>
                                        <figure className="highlight text-center">
                                            <button className="btn-clipboard">Copy</button>
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        </figure>
                                    </div>
                                    <div>
                                        <figure className="highlight text-center">
                                            <button className="btn-clipboard">Copy</button>
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        </figure>
                                    </div>
                                    <div>
                                        <figure className="highlight text-center">
                                            <button className="btn-clipboard">Copy</button>
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        </figure>
                                    </div>
                                    <div>
                                        <figure className="highlight text-center">
                                            <button className="btn-clipboard">Copy</button>
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        </figure>
                                    </div>
                                    <div>
                                        <figure className="highlight text-center">
                                            <button className="btn-clipboard">Copy</button>
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        </figure>
                                    </div>
                                    <div>
                                        <figure className="highlight text-center">
                                            <button className="btn-clipboard">Copy</button>
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        </figure>
                                    </div>
                                </div >
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary">Return</button>
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