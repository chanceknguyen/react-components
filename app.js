// TODO

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }



  enter() {
    this.setState({
      done: true
    });
  }

  leave() {
    this.setState({
      done: false
    });
  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : ''
    }
    return (
      <li style={style} onMouseLeave={this.leave.bind(this)} onMouseEnter={this.enter.bind(this)} >{this.props.groceryItem}</li>
    );
  }
}

var GroceryList = (props) => (
  <div>
    <h2>My Grocery List</h2>
    <ul>
      {props.groceryItems.map(groceryItem =>
        <GroceryListItem groceryItem={groceryItem} />
        )}
    </ul>
  </div>
);

ReactDOM.render(<GroceryList groceryItems = {['eggs', 'milk', 'apples']}/>, document.getElementById('app'));

