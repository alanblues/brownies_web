import React, { useState } from 'react';

export const useTerms = () => {
    const [toggleTerms, setToggleTerms] = useState({display: 'block', icon: 'left'})
    const [toggleDefinitions, setToggleDefinitions] = useState({display: 'block', icon: 'left'})
    const [toggleUser, setToggleUser] = useState({display: 'block', icon: 'left'})

    const toggleAcordion = (section: string): void => {
        switch (section) {
            case 'terms':
                const { display, icon } = toggleTerms;
                 setToggleTerms({
                    display: display === 'block' ? 'none' : 'block',
                    icon: icon === 'left' ? 'angle down' : 'left'
                });
                break;
            case 'definitions':
                const { display: view, icon: image } = toggleDefinitions;
                setToggleDefinitions({
                    display: view == 'block' ? 'none' : 'block',
                    icon: image === 'left' ? 'angle down' : 'left'
                });
                break;
            case 'user':
                setToggleUser({
                    display: toggleUser.display === 'block' ? 'none' : 'block',
                    icon: toggleUser.icon === 'left' ? 'angle down' : 'left'
                });
                break;
        }
    }

    return {
        toggleTerms,
        toggleDefinitions,
        toggleUser,
        toggleAcordion
    }
}