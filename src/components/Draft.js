import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import DraftBox from './DraftBox'
import { Grid, Button, Box } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Preban from './Preban'


function Draft({ filterDrop, add, addAndFilter }) {
    const [isChecked, setIsChecked] = useState(true)
    const [isCheckedE, setIsCheckedE] = useState(false)

    const draftBoxes = []

    for (let i=0; i < 5; i++) {
        draftBoxes.push(<DraftBox filterDrop={filterDrop} add={add} addAndFilter={addAndFilter}/>)
    }

    return (
        <Grid container spacing={1} className="draft-container">
            <Grid item container xs={5}>
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
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="center">
                        Preban
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Preban filterDrop={filterDrop} add={add} addAndFilter={addAndFilter}/>
                    </Box>
                </Grid>
                {draftBoxes}
            </Grid>
            <Grid item xs={1}>
                <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/Street_Fighter_VS_logo.png" alt="vs" width="100%"/>
                </Box>
            </Grid>
            <Grid item container xs={5}>
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
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="center">
                        Preban
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Preban filterDrop={filterDrop} add={add} addAndFilter={addAndFilter}/>
                    </Box>
                </Grid>
                {draftBoxes}
            </Grid>
        </Grid>
    )
}

export default Draft
