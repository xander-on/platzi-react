import '../styles/todoSearch.css';

export const TodoSearch = ({searchValue, setSearchValue}) => {

    const inputChange = ( event ) => {
        const { value } = event.target;
        setSearchValue( value );
    }

    return (
        <input 
            type       ="text" 
            placeholder="Buscar un Todo" 
            className  ="TodoSearch"
            onChange   ={ inputChange }
            value      ={ searchValue }
        />
    );
}
