import React from 'react';


function Dashboard() {
    return <div>Dashboard!</div>
  }

  class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    tick() {
        this.setState({
           date: new Date()                                          
        });
    }

    render() {
        return (
            <div className="Clock">
            <h2><p>Hello Sage! The time is: </p>
            {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }

}









  export default Dashboard;