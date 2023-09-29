import ResumeItem from "./resumeItem"
import ResumeChip from './resumeChips'
import { Box, Divider } from '@mui/material';
import data from '../../data/data.json'

const ResumeList = () => {

    const BoxStyle = {
        backgroundColor: '#fafafa',
        minHeight: '500px',
        textJustify: 'auto',
        flexDirection: 'column',
        justifyItems: 'center',
        alignItems: 'center',
        padding: '2% 0'
    }

    const eduList = data.eduList

    const workList = data.workList

    const skillsList = data.skillsList
    

    return (
        <Box sx={BoxStyle} id='resume'>
            {
                eduList.map((edu, idx) => {
                    return <ResumeItem {...edu} key={idx}></ResumeItem>
                })
            }
            <Divider light={true} sx={{ mb: 2 }} />
            {
                workList.map((work, idx) => {
                    return <ResumeItem {...work} key={idx} />
                })
            }
            <Divider light={true} sx={{ mb: 2 }} />
            <ResumeChip key={0} {...skillsList}></ResumeChip>
        </Box>
    )
}

export default ResumeList