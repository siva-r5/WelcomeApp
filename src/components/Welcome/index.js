import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  changeText = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  getButtonText = () => {
    const {isSubscribe} = this.state
    return isSubscribe ? 'Subscribed' : 'subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="main-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        <button
          className="button-style"
          type="button"
          onClick={this.changeText}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
