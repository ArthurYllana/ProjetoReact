function Button({ onClick, children}){
    return(
        <button onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    );
}

function PlayButton({ movieName}){
    function handlePlayClick(){
        alert(`Playing {movieName}!`)
    }
    return(
        <Button onClick={handlePlayClick}>
            Play "{movieName}"
        </Button>
    );
}

function UploadBotton(){
    return(
        <Button onClick={() => alert('Uploading!')}>
            Upload Image
        </Button>
    );
}

export default function Toolbar(){
    return(
        <div className="ToolBar" onClick={() => {
            alert("You clicked on the toolbar!");
        }}>
            <button onClick={() => alert("Playing!")}>
                Play movie
            </button>
            <button onClick={() => alert("Uploading!")}>
                Upload Image
            </button>
        </div>
    );
}