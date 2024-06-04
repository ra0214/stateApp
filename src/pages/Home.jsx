import { useState } from "react";
import { Helmet } from "react-helmet-async";

function Home() {
    const [data,setData] = useState(["Uno", "Dos"]);
    const handleClick = (e) => {
        setData([...data,"Tres"])
        /*Segunda forma de poder hacerlo setData((prevData)=>[...prevData,"Tres"])*/
        /*let aux = []
        data.forEach(item => aux.push(item));
        aux.push("Tres");
        setData(aux);*/
    };

    return(
        <>
        <Helmet>
            <title>Cambio de titulo xd</title>
        </Helmet>
        <ul>
            {data.map(item => <p>{item}</p>)}
        </ul>
        <button onClick={handleClick}>Actualizar</button>
        </>
    );
}

export default Home;