import React from 'react'
import { Box } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

function Search({ search, setSearch}) {

    // console.log(search)

    return (
        <Box display="flex" justifyContent="center" alignItems="center" width="100%">
            <Box width="80%">
            <TextField
                label="Search Heroes..."
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            </Box>
        </Box>
    )
}

export default Search
