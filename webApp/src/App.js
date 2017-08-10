const React = require("react")

class App extends React.Component {
    render(){
        return <Boom/>
    }
}

class Boom extends React.Component {
    constructor(){
        super()

        this.state = {}
    }

    render(){
        return <div>
            {this.state.message}
            <button onClick={() => this.setState({message: "BOOM"})}>Click Me</button>
        </div>
    }
}

module.exports = App