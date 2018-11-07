import React from 'react';

class EmptyMailBox extends React.Component {
    render() {
        return (
        <div className="no-data-div sg-bg-2"
             style={{flexDirection: 'column', textAlign: 'center', boxSizing: 'border-box', display: 'block', padding: '10px'}}>
            <img src={"images/mail.png"} style={{width: '71px'}}/>
            <p className="zs-lbl sg-c-2">Нет писем</p>
        </div>
        );
    }
}

export default EmptyMailBox;
