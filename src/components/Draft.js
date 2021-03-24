import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import DraftBox from './DraftBox'
import { Grid, Button, Box } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'


function Draft({ filterDrop, add, addAndFilter }) {
    const [isChecked, setIsChecked] = useState(true)
    const [isCheckedE, setIsCheckedE] = useState(false)

    const draftBoxes = []

    for (let i=0; i < 5; i++) {
        draftBoxes.push(<DraftBox filterDrop={filterDrop} add={add} addAndFilter={addAndFilter}/>)
    }

    return (
        <Grid container spacing={1} className="draft-container">
            <Grid item container xs={6}>
                <Box>
                    <FormControlLabel
                        control={
                        <Checkbox 
                            checked={isChecked} 
                            onChange={() => setIsChecked(!isChecked)}
                        />}
                        label="First Pick"
                    />
                </Box>
                {draftBoxes}
                
            </Grid>
            <Grid item container xs={6}>
                <Box>
                    <FormControlLabel
                        control={
                        <Checkbox 
                            checked={isCheckedE} 
                            onChange={() => setIsCheckedE(!isCheckedE)}
                        />}
                        label="First Pick"
                    />
                </Box>
                {draftBoxes}
            </Grid>
        </Grid>
    )
}

export default Draft
