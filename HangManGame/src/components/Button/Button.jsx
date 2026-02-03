function Button({ text, onClickHandler}) {

    console.log(text); // Object

    return (
        <button
            onClick={onClickHandler}
            className="text-white bg-blue-500"
        >
        </button> 
    );
}

export default Button;   