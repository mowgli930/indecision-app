let show = false;

const onShowDetails = () => {
    show = !show;
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility</h1>
            <button onClick={onShowDetails}>{show ? 'Hide Details' : 'Show Details'}</button>
            {show && (<p>This is a text about details</p>)}
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
}

render();