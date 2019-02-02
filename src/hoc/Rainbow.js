import React from 'react'

const Rainbow = (WrappedComponent) => (props) => {
    const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
    const randomColour = colours[Math.floor(Math.random() * 5)];
    const className = randomColour + '-text'

    return (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    )


}

export default Rainbow