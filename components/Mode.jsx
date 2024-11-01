import React from 'react'

const Mode = ({ name, population, region, capital }) => {
    return (

        <p className="theme-changer">
            <button
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                onClick={() => document.body.classList.toggle('on')}
            >
                <i className="fa-regular fa-moon off" />
                &nbsp;&nbsp;Dark Mode
            </button>
        </p>
    )
}

export default Mode
