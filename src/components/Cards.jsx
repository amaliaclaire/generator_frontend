import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const fakeData = [
    'Spicy jalapeno bacon ipsum dolor amet deserunt exercitation t-bone, cow pancetta leberkas ad sirloin elit rump                         consectetur ut incididunt.',
    'Anim laborum capicola mollit ut labore excepteur strip steak qui tongue leberkas dolore fugiat.',
    'Sunt tri-tip cillum burgdoggen jowl labore, bacon quis ut shank corned beef short ribs kielbasa turducken dolor.',
    'Cillum boudin ham hock shank. Hamburger quis venison spare ribs leberkas.',
    'Fatback turkey adipisicing in sirloin officia jerky chuck ham hock tenderloin dolore venison id ea. Pork loin ut doner sirloin dolore  pork.',
    'Meatloaf consequat strip steak kevin, biltong sausage et quis nostrud picanha.',
    'Nisi pork loin proident jowl in ut fugiat est lorem chicken frankfurter short ribs venison.',
    'Doner venison shank burgdoggen, dolore qui aliquip flank porchetta ut do aliqua ut.',
    'Nulla fatback anim, ipsum in ut eu commodo beef ribs.',
    'Lorem cupidatat commodo, esse ea short ribs ut jowl occaecat consequat.',
    'Enim rump cillum flank.',
    'Kevin meatball andouille, quis ad veniam pig buffalo chicken alcatra picanha cupidatat.'
]

class Card extends Component {
    state = { limit: 5 }

    // constructor() {

    // }

    componentDidMount() {

    }

    load = (text) => {
        return (
            <div className="card">
                <div className="card-body">
                    {text}
                </div>
            </div>
        )
    }

    render() {
        let toLoad = fakeData.slice(0, this.state.limit)
        return (
            toLoad.map(e => this.load(e))
        )
    }
}

export default Card