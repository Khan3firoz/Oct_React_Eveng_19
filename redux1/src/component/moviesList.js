import React from 'react';

const ListView = (props) => {

    const renderView = ({list}) => {
        if(list){
            return list.map((item) => {
                return(
                    <div>{item.name}</div>
                )
            })
        }
    }

    return(
        <div>
            {renderView(props)}
        </div>
    )
}

export default ListView
