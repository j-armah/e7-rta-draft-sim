import React, { useState } from 'react'

function Search({ search, setSearch}) {

    // console.log(search)

    return (
        <div>
            Search: 
            <input 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}

export default Search
