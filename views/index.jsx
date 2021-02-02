var React = require('react');
var DefaultLayout = require('./layouts/default')
var ShoppingList = require('./shopping')

function HelloMessage(props) {
  return (
      <DefaultLayout title={props.title}>
          <div>Hello {props.name}</div>
          <ShoppingList name="Mahadev"/>
      </DefaultLayout>
  );
}

module.exports = HelloMessage;