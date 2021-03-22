import React from 'react'
import { useDrop } from 'react-dnd'
import DraftBox from './DraftBox'
import { Grid, Button, Box } from '@material-ui/core'

function Draft() {
    return (
        <Grid container spacing={1} className="draft-container">
            <Grid item container xs={6}>
                <Box>
                    <Button > First Pick </Button>
                </Box>
                <DraftBox />
                <DraftBox />
                <DraftBox />
                <DraftBox />
                <DraftBox />
            </Grid>
            <Grid item container xs={6}>
                <Box>
                    <Button > First Pick </Button>
                </Box>
                <DraftBox />
                <DraftBox />
                <DraftBox />
                <DraftBox />
                <DraftBox />
            </Grid>
        </Grid>
    )
}

export default Draft
