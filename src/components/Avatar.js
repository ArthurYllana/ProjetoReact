export default function Avatar(){
    const avatar = "./imagens/Gregorio_Y_Zara (1).jpg";
    const description = "Gregori Y. Zara"
    return(
        <img
            className="avatar"
            src = {avatar} 
            alt = {description}
        />
    );
}