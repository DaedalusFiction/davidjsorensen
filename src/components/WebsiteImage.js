import React from 'react'

const WebsiteImage = ({ image, url }) => {
    return (
        <a href={url} target="_blank" rel="noreferrer">
            <img className="transform hover:scale-105 transition w-full h-auto" src={image} alt="Streamerize website" />
        </a>
    )
}

export default WebsiteImage
