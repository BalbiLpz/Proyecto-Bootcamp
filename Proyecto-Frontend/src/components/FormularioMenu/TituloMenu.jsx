import React from 'react'; 

const TituloMenu = (props) => {
        return ( 
            <div>
                <h2 className="border">
                    {props.nombreMenu}
                </h2>
                <br></br>
            </div>
        );
}
 
export default TituloMenu;