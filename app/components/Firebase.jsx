var React = require('react');
import FirebaseActions from 'FirebaseActions';

var Firebase = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <FirebaseActions/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Firebase;
