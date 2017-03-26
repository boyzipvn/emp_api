  var AllItems = React.createClass({
    handleDelete(id) {
      this.props.handleDelete(id);
    },

    render() {
      var carts= this.props.carts.map((cart) => {
        return (
          <div>
            <tr key={cart.id}>
              <td>{cart.name}</td>
              <td>{cart.description}</td>
              <td>
                <button onClick={this.handleDelete.bind(this, cart.id)}>Delete</button>
              </td>
            </tr>
          </div>
        )
      });

      return(
        <div>
          {carts}
        </div>
      )
    }
  });
