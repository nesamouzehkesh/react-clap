import React from 'react';

const CardShow = ({ show }) => (
    <li>
        {show.name}
        {show.image}
        {show.url}
    </li>
)

export default CardShow;