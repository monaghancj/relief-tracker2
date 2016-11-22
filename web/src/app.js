const React = require('react')
const { BrowserRouter, Match } = require('react-router')

const Service = require('./components/service')
const Home = require('./pages/home')
const About = require('./pages/about')
const Efforts = require('./pages/efforts/index')
const EffortForm = require('./pages/efforts/form')

const App = React.createClass({
  render() {
    return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={Home} />
          <Match exactly pattern="/about" component={About} />
          <Match exactly pattern="/efforts" component={Service(Efforts)} />
          <Match exactly pattern="/efforts/new" component={Service(EffortForm)} />
        </div>
      </BrowserRouter>

    )
  }
})

module.exports = App
