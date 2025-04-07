import React, { useEffect, useState } from "react";


export const Prueba = () => {

    // useEffect
    // quiero que suceda algo al cargarse el componente (1 sola vez al cargarse/montarse)
    // quiero que suceda algo cada vez que sea modificado un estado

    const [data, setData] = useState([]);
    const [task, setTask] = useState('');
    const [color, setColor] = useState('')
    // si prueba esta vacio AL CARGARSE el componente, que se me añada 1 tarea
    // utilizando useEffect como windows.onLoad
    // se usa MUUUUUCCCCHCCCCCCHHHHHHHHHOOOOOOO para pedidos a BBDD
    useEffect(() => {
        console.log('sin dependencias');
        if (data.length == 0) setData([{ task: 'Practice!', id: Math.floor(Math.random() * 99999999) }]);
    }, []) // array de dependencias vacio, se ejecuta como un windows on load

    //utilizando useEffect a partir de la escucha de un estado

    useEffect(() => {
        const colors = ['bg-dark', 'bg-success', 'bg-warning'];
        setColor(colors[Math.floor(Math.random() * colors.length)])
    }, [data])

    // SIEMPRE TIENEN QUE SER ESTADOS, CON VARIABLES NMINDUNDI NO FUNCIONA

    /*
       syntax: useEffect(()=>{},[])
        useEffect() --> hook
        ()=> --> callback function --> lo que va a ejecutar el useEffect
        [] --> array de dependencias --> 
         1.--- Si tiene informacion-> a partir de la modificacion de que estados se va a ejecutar
         2.--- Si no tiene informacion -> se ejecuta al cargarse el componente
       */


    const arr = [1, 2, 3, 4] // array original
    const arra = [...arr, 'pepe'] //creando NUEVO array/objeto con la info del array con el spread operator (...)
    const arrb = arr // creando otra manera de acceder al array original
    arrb.push(58)
    console.log(arr, arra, arrb);
    console.log(arr == arra);
    console.log(arr == arrb);

    const handleSubmit = e => {
        e.preventDefault();
        setData([...data, { task, id: Math.floor(Math.random() * 99999999) }]);
    }

    const handleClick = (index) => {
        console.log(index)
        let aux = data.filter((el, i) => i != index) // a partir del index
        //let aux = data.filter((el,i)=> el.id!=id) // a partir del id
        setData(aux)
    }


    return (
        <div>
            <form onSubmit={handleSubmit} className={color}>
                <input type="text" value={task} onChange={e => setTask(e.target.value)} />
            </form>
            <ul>
                {/* {data.map((el, i) => <li key={i}>{el}</li>)} */}
                {data.map((el, i) => <li key={i}>{el.task}<span onClick={() => handleClick(i)} className="bg-danger p-1">X</span></li>)}

            </ul>
        </div>
    )
}