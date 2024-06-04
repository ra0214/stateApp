import { useNavigate, Link } from 'react-router-dom';
import './SectionLogin.css';
import Button from '../atoms/Button';
import Field from "../molecules/Field";

function SectionLogin(){
    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate("/home")
    }

    return(
        <div id='login_section'>
            <Field type="text" placeholder="Usuario" text="Ingrese el nombre de usuario"/>
            <Field type="password" placeholder="Contraseña" text="Ingrese su contraseña"/>
            <Button title="Iniciar sesión" onClick={handleClick}/>

            <div>No tienes cuenta, <Link to="/home">registrate</Link></div>
        </div>
    )
}

export default SectionLogin;