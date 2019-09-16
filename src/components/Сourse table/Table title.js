import React from 'react'
import { ItemTypes } from './ItemTypes'
import { useDrag } from 'react-dnd'

function Title() {
    const [{isDragging}, drag] = useDrag({
        item: { type: ItemTypes.NAME },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })
    return (
        <thead>
        <th
          ref={drag}
        >Name</th>
        <th>Buy</th>
        <th>Sell</th>
        <th>Relation</th>
        </thead>
    )
}

export default Title