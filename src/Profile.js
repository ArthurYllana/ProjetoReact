import foto from './imagens/Katerina.png'

export function Profile(){
    return(
        <img 
            src = {foto}
            alt = "Katherine Johnson"
        />
    )
}

export default function Gallery(){
    return(
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    )
}