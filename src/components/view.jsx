import React, { Component } from 'react'
import $ from 'jquery'
import Popper from 'popper.js'
import axios from 'axios'
import copy from 'copy-to-clipboard'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Card from './Cards'

class View extends Component {
    state = {
        cards: [],
        limit: 5
    }

    constructor(toggleView) {
        super()
        this.status = toggleView
    }

    componentDidMount() {
        $('#formModal').modal({ backdrop: 'static', keyboard: false })
        this.makeCards()
    }

    // <<<<<<<< REMOVE ME BEFORE DEPLOY >>>>>>>>>
    makeID = () => {
        let temp = []
        while (temp.length < 17) {
            temp.push(Math.floor(Math.random() * Math.floor(10)).toString())
        }
        return temp.join('')
    }
    // ******************************************

    makeCards = () => {
        axios.get(`https://baconipsum.com/api/?type=meat-and-filler&sentences=10`)
            .then((response) => {
                let quotes = response.data[0].split('.')
                let cards = []
                quotes.map((e) => {
                    cards.push(
                        {
                            id: this.makeID(),
                            quote: e,
                            category: 'blah',
                            rank: 'meh'
                        })
                })
                this.setState({ cards: cards })
            })
            .catch(console.error)
    }

    copyToClipboard = (e, quote) => {
        e.preventDefault()
        copy(quote)
    }

    render() {
        let toRender = this.state.cards.slice(0, this.state.limit)
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
                                    {toRender.map((card, i) => {
                                        return <Card
                                            copy={this.copyToClipboard}
                                            key={i}
                                            id={card.id}
                                            quote={card.quote}
                                        />
                                    })
                                    }
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