import React from 'react'

function Tabs(props) {
    const {tabs} = props;
    const handleClick = (e, content) => {
        props.changeCurrentContent(content);
    }
    return (
        <>
            <nav>
                {
                    tabs.map(
                        (tab, index) => {
                            return (
                                <button id={tab.id} key={tab.id} onClick={(e) => handleClick(e, tab.content)}>
                                    {tab.label}
                                </button>
                            )
                        }
                    )
                }
            </nav>
        </>
    )
}

export default Tabs
