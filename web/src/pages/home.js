const React = require('react')

const { Link } = require('react-router')

const Home = React.createClass({
  render() {
    return (
      <div>
        <h1>おかえりなさい</h1>
        <h3> (Welcome Home)</h3>
        <p> Menu </p>
        <ul>
          <li className="no-underline">
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/efforts">Efforts</Link>
          </li>
        </ul>
      </div>
    )
  }
})

module.exports = Home
