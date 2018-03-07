class Visibility extends React.Component {

    constructor(props) {
        super(props);
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleVisibilityToggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility</h1>
                <button onClick={this.handleVisibilityToggle}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && <p>This is a text about details</p>}
            </div>
        );
    }
}

ReactDOM.render(<Visibility/>, document.getElementById('app'));