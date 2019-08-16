import React, {Fragment} from 'react';

function VisibilityToggle(props) {
    const { visible, children } = props;
    return visible ? children : <Fragment/>
}

export default VisibilityToggle;
