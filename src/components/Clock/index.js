import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
    console.log('constructor method called: first')
  }

  componentDidMount() {
    console.log('componentDidMount method called: third')
    this.timerID = setInterval(this.tickTick, 1000)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount method called: fourth')
    clearInterval(this.timerID)
  }

  tickTick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    console.log('render method called: second', date)

    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
