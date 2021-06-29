import { useState } from 'react'

function Home() {
    const [text, setText] = useState('Text');

    const key = '8df3f62b146248e8acb302b07905c720';
    const url = `http://api.voicerss.org/?key=${key}&hl=en-us&src=${text}`;

    function GetSpeech() {
        const audio = new Audio(url);
        audio.play();
    }

    return (
        <div>
            <input onChange={(e) => setText(e.target.value)} />
            <button onClick={GetSpeech}>Play</button>
        </div>
    )
}

export default Home