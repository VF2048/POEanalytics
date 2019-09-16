import React from 'react'
import { ItemTypes } from './ItemTypes'
import { useDrag } from 'react-dnd'

function Knight() {
    const [{isDragging}, drag] = useDrag({
        item: { type: ItemTypes.NAME },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

    return (
        <div
            ref={drag}
        >
        ♘
        </div>
    )
}

export default Knight