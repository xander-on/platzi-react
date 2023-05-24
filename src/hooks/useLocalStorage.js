import { useEffect, useState } from "react";
// const defaultTodos = [
//     {id:1, description: 'Desayunar un pan', completed: true,  deleted: false },
//     {id:2, description: 'Hacer limpieza',   completed: false, deleted: false },
//     {id:3, description: 'Hacer ejercicio',  completed: true,  deleted: false },
//     {id:4, description: 'Estudiar React',   completed: false, deleted: false },
// ];

// localStorage.setItem( 'TODOS_V1', JSON.stringify(defaultTodos) );

export const useLocalStorage = ( itemName, initialValue ) => {

    const [items, setItems]     = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError]     = useState(false);

    
    useEffect(() => {
        setTimeout(()=>{
            try{
            
                const localStorageItem = localStorage.getItem(itemName);
                let itemValue;
    
                if( !localStorageItem ){
                    localStorage.setItem( itemName, JSON.stringify(initialValue) );
                    itemValue = initialValue;
                }else{
                    itemValue = JSON.parse( localStorageItem );
                    if (!itemValue) {
                        itemValue=[];
                        throw new Error('Error al obtener los datos');
                    }
                    setItems(itemValue);
                }
    
                setLoading(false);
            }catch(error){
                setLoading(false);
                setError(true);
            }    
        },3000);
        
    }, [ ]);

    
    const saveItems = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItems(newItem);
    }

    return {
        items,
        saveItems,
        loading,
        error,
    };
}