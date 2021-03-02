import React from 'react'

const ForwardRefFunctionalComponent = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
})

export default ForwardRefFunctionalComponent;
