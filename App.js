

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

        /*
         <div id="parent">
            <div id="child">
                <h1>I'm h1 tag</h1>
                <h1>I'm h1 tag</h1
            </div>
             <div id="child2">
                <h1>I'm h1 tag</h1>
                <h1>I'm h1 tag</h1
            </div>
        </div>
        
        Creating a nested element like what we above in React? 
        
        we first create a parent

        */
       const parent = React.createElement(
        "div", /*first argument <the parent div> */

        {id: "parent"},/*second argument <our div attribute for styling> */


        /*third argument <the children of our <div> because the child has siblings we rap it up in an array> */

        [
            React.createElement("div", {id: "child"}, [
                React.createElement("h1", {}, "Hi I'm h1 and I'm alive"),
                React.createElement("p", {}, "Hi I'm p and I'm alive")
            ]),

            React.createElement("div", {id: "child"}, [
                React.createElement("h2", {}, "Hi I'm h2 and I'm alive"),
                React.createElement("p", {}, "Hi I'm p and I'm alive")
            ])
        ]
);

       root.render(parent);

