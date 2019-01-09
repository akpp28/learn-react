import React from "react";

const SearchPanel = () => {
    const searchText = 'Type here to search';
    const searchStype = {
        fontSize: '20px'
    };
    return (
        <input
            style={searchStype}
            placeholder={searchText}/>
    );
};


export default SearchPanel;