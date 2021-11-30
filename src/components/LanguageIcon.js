import React from 'react'

const LanguageIcon = ({ language, color }) => {

    return (
        <p className={"border-2 rounded-md py-0.5 px-2 mx-1 inline-block text-" + color + " border-" + color}>{language}</p>
    )
}

export default LanguageIcon
