
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Loading extends Component {
    static defaultProps = {
        text: 'Loading',
        speed: 300
    }
    static propTypes = {
        text: PropTypes.string.isRequired,
        speed: PropTypes.number
    }
    state = {
        text: this.props.text
    }

    componentDidMount() {
        const stopper = this.originalText + '...'
        this.interval = setInterval(() => {
           (this.state.text === stopper)
                ? this.setState(() => { return { text: this.props.text } })
                : this.setState((prevState) => { return { text: prevState.text + '.' } })
        }, this.props.speed)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }    
    render() {
        return (
            <p className="loading">
                {this.state.text}
            </p>
        );
    }
}

export default Loading;