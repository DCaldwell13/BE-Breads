const React = require("react");
const Default = require("./layouts/default");

const Index = ({breads}) => {
    return(
        <Default>
            <h2>Index Page</h2>
            <ul>
            {breads.map((bread,index) => {
                return (<li key={index}>
                    <a href={`/breads/${index}`}>{bread.name}</a>
                </li>)
                /*
                <li>Hawaiian</li>
                <li>Pita</li>
                <li>Rye</li>
                */
            })}
            </ul>
        </Default>
    );
};

module.exports = Index;