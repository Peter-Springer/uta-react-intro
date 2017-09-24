import React, {Component} from 'react'

export default class SearchField extends Component {
  render() {
    return (
      <div>
        <input onChange={this.props.search}/>
        <button onClick={this.props.apiCall}>Search</button>
      </div>
    )
  }
}
