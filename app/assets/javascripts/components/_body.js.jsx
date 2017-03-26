var Body = React.createClass({
  getInitialState(){
    return {carts: [] }
  },

  componentDidMount() {
    $.getJSON('/carts.json', (response) => { this.setState({ carts: response }) });
  },

  handleDelete(id){
    $.ajax({ url: `/carts/${id}`,
      type: 'DELETE',
      success(response)
      {
        this.removeItemClient(id);
      }
    });
  },

  removeItemClient(id) {
    var newItems = this.state.carts.filter((cart) => {
      return Cart.id != id; });
      this.setState({ carts: newItems });
    },

  handleSubmit(item) {
    var newState = this.state.carts.concat(item);
    this.setState({ carts: newState })
  },

  render(){
      return(
        <div>
          <AllItems carts={this.state.carts} handleDelete={this.handleDelete}/>
          <NewItem  handleSubmit={this.handleSubmit}/>
        </div>
      )
  }
});
