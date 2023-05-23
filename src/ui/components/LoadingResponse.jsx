
export const LoadingResponse = ({ message = 'Cargando...'}) => {
    return (
        <>
            <br />
            <br />
            <div style={{ textAlign: 'center' }}>
                <img src="/assets/ball-triangle.svg" alt="Cargando" />
                <p style={{ fontSize: '22px' }}>{message}</p>
            </div>
        </>
        
        
    );
}
