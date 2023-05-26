
import { useContext } from 'react';
import { ModalContainer } from '../../ui'; 
import { ThemeOptions } from ".";
import { ThemeContext } from '../../context';


export const ThemeModal = () => {

    const { 
        openModalThemeState: {setOpenModalTheme, openModalTheme},
        colorThemeState:{ colorTheme }
    } = useContext( ThemeContext );

    const actionPrimary = () => {
        console.log( colorTheme );
    }

    const onCancel = () => {
        setOpenModalTheme(false);
    }

    return (
        <ModalContainer 
            openModal       = { openModalTheme }
            title           = { 'Configuracion del tema' }
            actionPrimary   = { actionPrimary }
            actionSecondary = { onCancel }
            isActionsAvaible = { false }
        >
            <ThemeOptions />
        </ModalContainer>
    )
}
