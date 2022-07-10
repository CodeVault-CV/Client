import { Accordion, AccordionDetails, AccordionSummary, Box, LinearProgress, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function LinearProgressWithLabel(props: any) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">{`${Math.round(
                props.value,
            )}%`}</Typography>
            </Box>
        </Box>
    );
}

export default function Problem() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                >
                    <Typography>[백준] 사다리타기</Typography>
                    <Box sx={{ width: '50%' }} pl={2}>
                        <LinearProgressWithLabel value={50}/>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>

                </AccordionDetails>
            </Accordion>
        </div>
        
    )
}