
import React from 'react';

function Component(props) 
{
    const {nameAuto, img, price} = props.auto;
    const id = props.id;
    const func = props.function;

    function delElem()
    {
        func(id);
    }

    return (
        <div className='col-4 justify-content-center border border-warning rounded-5 bg-warning-subtle p-2'>
            <img width={480} height={270} src={img} className='border rounded-2 border-danger'/>
            <p className='fs-1'>{nameAuto}</p>
            <p className='fs-3'>{price}$</p>
            <button onClick={delElem}>BUY!!!</button>
        </div>
    )
}

export default Component;