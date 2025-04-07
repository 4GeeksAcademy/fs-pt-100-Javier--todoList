import React, { useState } from "react";


export const Registro = () => {

    //inputs controlado

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });


    const [data, setData] = useState([]);



    const handleChange = e => {
        console.log(e.target.value);
        console.log(e.target.name);
        // setFormData({...formData, [e.target.name]:e.target.value})
        const { name, value } = e.target //desestructuracion
        setFormData({ ...formData, [name]: value })
    }

    

    // const obj = {
    //     city:''
    // }

    // const update = (obje, llave, valor) => {
    //     obje.llave=valor // no modifica la propiedad que recibe como llave, sino, crea la propiedad llave y le da el valor que enviamos como city
    //     obje[llave]=valor // modifica la propiedad del objeto que recibe como llave
    // }

    // console.log(obj)
    // console.log(update(obj, 'city', 'Madrid'));
    // console.log(obj)

    const handleSubmit = (e) => {
        e.preventDefault();
        setData([...data, formData]);
        setFormData({ email: '', password: '' });
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="email" name="email" value={formData.email} onChange={handleChange} />
                <input type="password" placeholder="password" name="password" value={formData.password} onChange={handleChange} />
                <input type="submit" value="login" />
            </form>


            <ol>
                {data.map((el, i) => <li key={i}>{el.email}</li>)}
            </ol>
        </>
    )
}