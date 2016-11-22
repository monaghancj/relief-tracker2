const React = require('react')

const EffortForm = React.createClass({
  getInitialState: function() {
    return {
      effort:{}
    };
  },
  componentDidMount() {

  },
  render() {
    return (
      <div>
        <h3>Relief Effort Form</h3>
        <form>
          <div>
            <label>Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Location</label>
            <input type="text" />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    )
  }
})

module.exports = EffortForm
