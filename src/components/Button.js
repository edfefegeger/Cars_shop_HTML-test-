function Button( props ) 
{
    const {textBut, plusser,onClick, className} = props;

    function choiceArg()
    {
        if (plusser % 2 === 0)
            onClick(1);
        else
            onClick(2);
    }
    return (<button onClick={choiceArg} className={className}>
        {textBut} {plusser % 2 === 0 ? 1 : 2}
    </button>)
}

export default Button;