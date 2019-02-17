// Function components are good when a component doean't need state or
// other lifecycle functions built in react.
const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed)
    ]);
};

class App extends React.Component {
    handleTitleClick() {
        alert("You clicked the title!")
    }
    render() {
        return React.createElement("div", {}, [
            React.createElement("h1", { onClick: this.handleTitleClick }, "Adopt a Pet!"),
            React.createElement(Pet, {
                name: "Rudy",
                animal: "Dog",
                breed: "Dachshund"
            }),
            React.createElement(Pet, {
                name: "Katie",
                animal: "Dog",
                breed: "Dachshund"
            }),
            React.createElement(Pet, {
                name: "Corkie",
                animal: "Dog",
                breed: "Shnoodle"
            })
        ]);
    }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));