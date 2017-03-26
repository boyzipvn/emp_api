var NewItem = React.createClass({
  handleClick() {
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    $.ajax({
      url: "/carts",
      type: "POST",
      data: { cart: { name: name, description: description } },
      success: (response) => {
        this.props.handleSubmit(cart);
      }
    });
  },

  render(){
      return(
        <div>
          <h5>Create New Cart</h5>
          <input ref="name" placeholder="Enter the name of the item" />
          <input ref='description' placeholder='Enter a description' />
          <button onClick={this.handleClick}>Submit</button>
        </div>
      )
  }
});
