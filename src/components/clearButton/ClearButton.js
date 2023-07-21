

import React from 'react';

const ClearButton = () => {

    return (
        <button onClick={() => localStorage.clear()}>удалить данные</button>
    );
}

export default ClearButton;
