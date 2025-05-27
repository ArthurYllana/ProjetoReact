import { useState } from "react";

export default function FormQuiz() {
    const [answer, setAnswer] = useState('');
    const [erro, setErro] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success') {
        return <h1>That's right!</h1>
    }
    
    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try{
            await submitForm(answer);
            setStatus('sucess')
        } catch(err) {
            setStatus('typing');
            setErro(err);
        }
    }

    function handleTextareaChange(e){
        setAnswer(e.target.value);
    }
}