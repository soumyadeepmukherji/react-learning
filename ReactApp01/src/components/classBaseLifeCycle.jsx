import React from "react";

class Life extends React.Component{
    constructor(props){
        super(props)
        this.state = {count: 0}
        console.log('Constructor')
    }

    componentDidMount(){
        console.log('Component is Mounted')
    }

    componentDidUpdate(){
        console.log("Compound Updated")
    }

    componentWillUnmount(){
        console.log("Compound Unmounted")
    }

    render(){
        console.log("Render")

        return(
            <>
            <h1>Render Class Component</h1>
            <h2>Count: {this.state.count}</h2>
            <button onClick={() => this.setState({count: this.state.count + 1})}>
                Increment
            </button>
            </>
        )
    }
}

export default Life