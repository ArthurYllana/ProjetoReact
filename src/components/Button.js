export default function Button(){
    function handleClick(){
        alert ("You clicked Me!");
    }

    return(
        <button onClick={handleClick}>
            Click me
        </button>
    );
}