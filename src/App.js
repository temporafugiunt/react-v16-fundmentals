const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed)
    ]);
};

// Stateless Function Component Representation of App
const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt a Pet!"),
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
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));