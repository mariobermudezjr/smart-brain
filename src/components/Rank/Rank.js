import React from 'react'

class Rank extends React.Component {
  constructor() {
    super()
    this.state = {
      emoji: '',
    }
  }

  componentDidMount() {
    this.generateEmoji(this.props.entries)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.entries === this.props.entries && prevProps.name === this.props.name) {
      return null
    }
    this.generateEmoji(this.props.entries)
  }

  generateEmoji = (entries) => {
    fetch(`https://hcbdg65o11.execute-api.us-east-1.amazonaws.com/dev/rank?rank=${entries}`)
      .then((resp) => resp.json())
      .then((data) => this.setState({ emoji: data.input }))
      .catch(console.log)
  }

  render() {
    const { entries, name } = this.props
    return (
      <div>
        <div className="white f3">{`${name}, your current entry count is...`}</div>
        <div className="white f1">{entries}</div>
        <div className="white f3">{`Rank Badge: ${this.state.emoji}`}</div>
      </div>
    )
  }
}

export default Rank
