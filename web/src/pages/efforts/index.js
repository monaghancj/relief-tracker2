const React = require('react')
const { Link } = require('react-router')

const Efforts = React.createClass({
  getInitialState: function() {
    return {
      efforts: []
    };
  },
  componentDidMount(){
    this.props.allDocs('efforts', (err, efforts) => {
      if (err) return console.log(err.message)
      this.setState({efforts})
    })
  },
  render() {
    return (
      <div>
        <h1>Efforts List</h1>
        <Link to="/efforts/new">New Relief Effort</Link>
        <ul>
          {this.state.efforts.map(effort =>
            <li key={effort.id}> {effort.name} </li>
          )}
        </ul>
        <Link to="/">Home</Link>
      </div>
    )
  }
})

module.exports = Efforts
