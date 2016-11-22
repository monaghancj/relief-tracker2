const React = require('react')
const xhr = require('xhr')

const Service = (Component) => React.createClass({
  allDocs(model, callback) {
    xhr.get('http://localhost:4000/' + model,
    { json:true }, (err, response, body) => {
      callback(err, body)
    })
  },
  post(model, doc, callback) {
    xhr.post('http://localhost:4000/' + model,
      { json:doc }, (err, response, body) => {
        callback(err, body)
      })
  },
  render() {
    return (
      <Component {...this.props}
        allDocs={this.allDocs}
        post={this.post}
      />
    )
  }
})

module.exports = Service

//        ____     (   )       ________
//       |____|      (  )     |________\__
//      |o == o|        8  o  [_( )____( )_}
//       *    *
//
