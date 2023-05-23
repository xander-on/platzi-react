import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube }  from "@fortawesome/free-solid-svg-icons";

export const IconMessage = ({ icon=faCube, message='' }) => {
    return (
        <>  
            <br />
            <br />
            <div style={{ textAlign: 'center' }}>
                <FontAwesomeIcon icon={ icon } style={{ fontSize: '84px' }}/>
                <p style={{ fontSize: '22px' }}>{ message }</p>
            </div>
            <br />
        </>
        
    );
}

