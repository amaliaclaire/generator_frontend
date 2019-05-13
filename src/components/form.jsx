import React, { Component } from 'react'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import View from './View'

class Form extends Component {

    constructor(props) {
        super(props)
        // this.status = toggleView
    }

    componentDidMount() {
        $('#form-modal').modal({ backdrop: 'static', keyboard: false })
    }

    handleSubmit = () => {
        let category = $('#category').find(":selected").text()
        let rank = $('#rank').find(":selected").text()
        this.props.handleRequest({ category: category, rank: rank })
        this.props.toggleView()
    }

    render() {
        return (
            <div>
                <div className="modal fade" id="form-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Sassy Responses Generator</h5>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <select id="category">
                                            <option value>Category...</option>
                                            <option value>Dick pics</option>
                                            <option value>Jackass</option>
                                            <option value>Just being a dick</option>
                                        </select>
                                        <br></br>
                                        <br></br>
                                        <select id="rank">
                                            <option value>Degree of burn...</option>
                                            <option value>Whimsically Scolding</option>
                                            <option value>Gonna need some Aloe Vera</option>
                                            <option value>Manhood ruined</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Form