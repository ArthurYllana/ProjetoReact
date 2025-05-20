import Button from "./Button";
import Toolbar from "./Toolbar";

export default function AppAtv(){
    return (
        <Toolbar
            onPlayMovie={() => alert("Playing!")}
            onUploadImage={() => alert("Uploading!")}
        />
    );
}

function ToolBar({ onPlayMovie, onUploadImage }) {
    return(
        <>
            <Button onClick={onPlayMovie}>
                Play Movie
            </Button>
            <Button onClick={onUploadImage}>
                Upload Image
            </Button>
        </>
    );
}

function Button({ onClick, children }) {
    return(
        <button onClick={onClick}>
            {children}
        </button>
    );
}