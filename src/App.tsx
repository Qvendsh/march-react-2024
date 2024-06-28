import React from 'react';
import MyCustomButtonComponent from "./components/MyCustomButtonComponent";
import AnotherButtonComponent from "./components/AnotherButtonComponent";

const App = () => {
    return (
        <>
    <MyCustomButtonComponent label={'Click me '}>HERE </MyCustomButtonComponent>
    <AnotherButtonComponent label={'do not click me '}>____ </AnotherButtonComponent>
        </>
    );
};

export default App;