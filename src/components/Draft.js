import React from 'react'
import { useDrop } from 'react-dnd'
import DraftBox from './DraftBox'

function Draft() {
    return (
        <div className="draft-container">
            <div className="your-draft">
                Your Draft
                <DraftBox />
                <DraftBox />
                <DraftBox />
                <DraftBox />
                <DraftBox />
            </div>
            <div className="enemy-draft">
                Enemy Draft
                <DraftBox />
                <DraftBox />
                <DraftBox />
                <DraftBox />
                <DraftBox />
            </div>
        </div>
    )
}

export default Draft
