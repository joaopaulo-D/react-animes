import React, { useState } from "react";
import useDebounce from "../../hooks/useDebounce";

function SearchInput(props){
    const [displayValue, setDisplayValue] = useState(props.value)
    const debouncedChange = useDebounce(props.onChange, 1000)

    function handleOnChange(e){
        setDisplayValue(e)
        debouncedChange(e)
    }

    return(
        <form>
            <input 
                className="search"
                type="search" 
                placeholder="Pesquise seu anime"
                value={displayValue}
                onChange={e => handleOnChange(e.target.value)}
            />
        </form>
    )   
}

export default SearchInput;