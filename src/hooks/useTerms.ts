import React, { useState } from 'react';

export const useTerms = () => {
    const [toggleTerms, setToggleTerms] = useState({display: 'block', icon: 'left'})
    const [toggleDefinitions, setToggleDefinitions] = useState({display: 'block', icon: 'left'})
    const [toggleUser, setToggleUser] = useState({display: 'block', icon: 'left'})

    const toggleAcordion = (section: string): void => {
        console.log(toggleDefinitions);
        switch (section) {
            case 'terms':
                const { display, icon } = toggleTerms;
                 setToggleTerms({
                    display: display === 'block' ? 'none' : 'block',
                    icon: icon === 'left' ? 'up' : 'left'
                });
                break;
            case 'definitions':
                const { display: view, icon: image } = toggleDefinitions;
                setToggleDefinitions({
                    display: view == 'block' ? 'none' : 'block',
                    icon: image === 'left' ? 'up' : 'left'
                });
                console.log(toggleDefinitions);
                break;
            case 'user':
                setToggleUser({
                    display: toggleUser.display === 'block' ? 'none' : 'block',
                    icon: toggleUser.icon === 'left' ? 'up' : 'left'
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