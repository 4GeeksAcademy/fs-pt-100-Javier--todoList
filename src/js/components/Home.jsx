import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Formulario } from "./formulario.jsx";
import { Registro } from "./registro.jsx";
import { Prueba } from "./prueba.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<p className="fs-1">useEffect con forms</p>
			<Formulario />
			<h3>Registro</h3>
			<Registro />


			<h3>Prueba aqui</h3>
			<Prueba/>
		</div>
	);
};

export default Home;