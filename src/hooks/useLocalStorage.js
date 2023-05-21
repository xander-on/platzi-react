import { useState } from "react";
// const defaultTodos = [
//     {id:1, description: 'Desayunar un pan', completed: true,  deleted: false },
//     {id:2, description: 'Hacer limpieza',   completed: false, deleted: false },
//     {id:3, description: 'Hacer ejercicio',  completed: true,  deleted: false },
//     {id:4, description: 'Estudiar React',   completed: false, deleted: false },
// ];

// localStorage.setItem( 'TODOS_V1', JSON.stringify(defaultTodos) );

export const useLocalStorage = ( itemName, initialValue ) => {
    const localStorageItem = localStorage.getItem(itemName);
    let itemValue;

    if( !localStorageItem ){
        localStorage.setItem( itemName, JSON.stringify(initialValue) );
        itemValue = initialValue;
    }else{
        itemValue = JSON.parse( localStorageItem );
    }

    const [item, setItem] = useState(itemValue);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    return [item, saveItem];
}