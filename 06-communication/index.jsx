/**
 * Pass a change handler function prop from child to the parent state.
 * */

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [{'name': 'item1'}, {'name': 'item2'}, {'name': 'item3'}]}
    }

    onDelete(item) {
        this.setState({items: this.state.items.filter((i) => i !== item)})
    }

    render() {
        return (
            <ul>
                {this.state.items.map((i) => <Item key={i.name} item={i} onDelete={this.onDelete.bind(this)}/>)}
            </ul>
        )
    }
}

class Item extends React.Component {
    onClickHandler(item) {
        this.props.onDelete(this.props.item)

    }

    render() {
        return (
            <li>
                {this.props.item.name}
                <button onClick={() => this.onClickHandler(this.props.item)}>Remove</button>
            </li>
        )
    }
}

ReactDOM.render(<List/>, document.getElementById('content'));