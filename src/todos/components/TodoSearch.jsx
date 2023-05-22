import '../styles/todoSearch.css';

export const TodoSearch = ({searchValue, setSearchValue}) => {

    const inputChange = ( event ) => {
        const { value } = event.target;
        setSearchValue( value );
    }

    return (
        <input 
            type       ="text" 
            placeholder="picar cebolla" 
            className  ="TodoSearch"
            onChange   ={ inputChange }
            value      ={ searchValue }
        />
    );
}
