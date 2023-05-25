import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeOptions } from "./";
import { ModalContainer } from '../../ui'; 
import { useContext } from "react";
import { ThemeContext } from "../../context";


export const ButtonTheme = () => {

    const { 
        openModalThemeState
    } = useContext( ThemeContext );

    const { openModalTheme, setOpenModalTheme } = openModalThemeState;

    const handlerOpenModalTheme = () => {
        setOpenModalTheme(true);
    }

    return (
        <>
            <button onClick={ handlerOpenModalTheme }>
                <FontAwesomeIcon icon={faPalette} style={{fontSize:'20'}}/>
            </button>

            <ModalContainer 
                openModal   ={ openModalTheme }
                setOpenModal={ setOpenModalTheme }
                title       ={'Configuracion del tema'}
            >
                <ThemeOptions />
            </ModalContainer>
        </>
    );
}
