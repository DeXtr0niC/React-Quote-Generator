import React from 'react'


class FadingComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fade: false
    }
  }

  componentDidMount () {
    this.setState({fade: true})
  }

  render () {
    const fade = this.state.fade
    return (
      <div className={fade ? 'fade' : ''} onAnimationEnd={() => this.setState({fade: false})}>{this.props.children}</div>
    )
  }

}