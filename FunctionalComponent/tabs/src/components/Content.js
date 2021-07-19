import React from 'react'

function Content(props) {
    const {currentContent} = props;
    return (
        <>
            <h1>{currentContent}</h1>
        </>
    )
}

export default Content
