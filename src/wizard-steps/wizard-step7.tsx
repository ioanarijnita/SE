import Button from '@mui/material/Button';
import { ArrowCircleLeft } from '@mui/icons-material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Money from "../assets/money.png";
import { useContext } from 'react';
import { AnswersContext } from '../App';

export function WizardStep7(props: any) {
    const answersContext = useContext(AnswersContext);

    return <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#f0d4c4', borderBottomRightRadius: 24, borderTopRightRadius: 24, height: 546 }}>
        <div style={{ width: 450 }}>
            <p style={{ fontSize: 48, fontWeight: "bold", textAlign: "center", position: "relative", top: 24, color: '#7991BD', opacity: 0 }}>Let's start...</p>
            <FormControl style={{ marginTop: 48, marginLeft: 24 }}>
                <FormLabel id="demo-radio-buttons-group-label" style={{ fontSize: 32 }}>Choose the best option for you</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    style={{ display: "flex", flexDirection: "row", width: 300, marginTop: 24 }}
                >
                    <FormControlLabel value={50} control={<Radio />} label="Under 50 lei" onClick={() => {
                        answersContext?.setAnswers({ ...answersContext.answers, averageMealPrice: 50 })
                        props.goToStep(8);
                    }} />
                    <FormControlLabel value={100} control={<Radio />} label="50-100 lei" onClick={() => {
                        answersContext?.setAnswers({ ...answersContext.answers, averageMealPrice: 100 })
                        props.goToStep(8);
                    }} />
                    <FormControlLabel value={150} control={<Radio />} label="100-150 lei" onClick={() => {
                        answersContext?.setAnswers({ ...answersContext.answers, averageMealPrice: 150 })
                        props.goToStep(8);
                    }} />
                    <FormControlLabel value={200} control={<Radio />} label="Above 150 lei" onClick={() => {
                        answersContext?.setAnswers({ ...answersContext.answers, averageMealPrice: 200 })
                        props.goToStep(8);
                    }} />
                </RadioGroup>
            </FormControl>
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
        </div>
        <div style={{ width: 450, height: 103 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: 15, flexDirection: "row", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Button onClick={() => props.goToStep(6)}>
                        <ArrowCircleLeft style={{ color: '#c89474', fontSize: 50 }} />
                    </Button>
                </div>
                <img src={Money} style={{ width: 70, height: 70, }} />
            </div>
        </div>
    </div>
}
