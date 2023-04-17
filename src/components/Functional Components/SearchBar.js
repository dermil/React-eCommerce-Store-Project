import React, {useState} from "react";

export default function SearchBar({value}) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleClick = () => {
        value.findItems(searchTerm);
    }

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        
    };

    return (
        <div className="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Search</span>
            </div>
            <input type="text" class="form-control" placeholder="Search Products" aria-label="Search Products" aria-describedby="basic-addon1" 
            value={searchTerm} onChange={handleSearch}/>
            <button class="input-group-text" onClick={handleClick}><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        )
}