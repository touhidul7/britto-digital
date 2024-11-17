import React from 'react'

export default function Accordionitem({title, content, checked}) {
    return (
        <div className="collapse collapse-arrow join-item border-base-300 border-b">
            <input type="radio" name="my-accordion-4" defaultChecked={checked?true:false} />
            <div className="collapse-title text-xl font-medium">{title}</div>
            <div className="collapse-content">
                <p>{content}</p>
            </div>
        </div>
    )
}
