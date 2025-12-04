

/*how to cerate h1 in react, in JS we have document.createElement that takes in only tags
    but in react createElement takes in h1, {for giving an id or class heading to our h1 incase we want to style it}
    , "what we want to put in the h1" so this works diffrent*/
    const heading =React.createElement("h1", {id: "head"}, "Hello World from React");


    /* Now that we've created the heading we need to put it into our <div> id root as a children

        To do that we need to first give react a root where it can do the DOM manipulation.

        createRoot() is an element in react and all our app runs inside of it.

        without ReactDOM you can't use document.getElement in react
        */

        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(heading);