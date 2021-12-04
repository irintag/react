import React from 'react';
import cl from './MyModal.module.css'

const MyModal = ({visible, setVisible, children}) => {

    const rootclasses = [cl.myModal];
    if(visible) {
        rootclasses.push(cl.myModalActive)
    }


    return (
        <div className={rootclasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={ e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;