import React, { useState } from "react";

//SPA --> Single Page Application
export const Formulario = () => {

    //inputs controlado
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState([]);

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = e => {
        console.log('submit event');
        e.preventDefault();
        console.log(email, password);
        setData([...data, { email, password }]);
        //setData([...data, email]);
        setEmail('');
        setPassword('');
    }

    const handleKeyDown = e => {
        console.log(e)
        if (e.code == "Enter") {
            console.log('Hey!')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
                <input type="text" placeholder="email" value={email} onChange={handleEmailChange} />
                <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                {/* <input hidden type="submit" value="login" /> */}
            </form>

            <ol>
                {data.map((el, i) => <li key={i}>{el.email}</li>)}
            </ol>

        </>

    )
}