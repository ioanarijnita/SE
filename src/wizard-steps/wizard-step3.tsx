import Button from '@mui/material/Button';
import { ArrowCircleLeft } from '@mui/icons-material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Vegetarian1 from "../assets/vegetarian1.gif";
import Vegetarian2 from "../assets/vegetarian2.gif";
import Salad from "../assets/salad.png";
import { useContext } from 'react';
import { AnswersContext } from '../App';

export function WizardStep3(props: any) {
    const answersContext = useContext(AnswersContext);

    return <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#f0d4c4', borderBottomRightRadius: 24, borderTopRightRadius: 24, height: 546 }}>
        <div style={{ width: 450 }}>
            <p style={{ fontSize: 48, fontWeight: "bold", textAlign: "center", position: "relative", top: 24, color: '#7991BD', opacity: 0 }}>x</p>
            <FormControl style={{ marginTop: 48, marginLeft: 24 }}>
                <FormLabel id="demo-radio-buttons-group-label" style={{ fontSize: 32 }}>Are you vegetarian?</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: 300, marginTop: 24 }}
                >
                    <FormControlLabel value={true} control={<Radio />} label="Yes" onClick = {() => {
                        answersContext?.setAnswers({...answersContext.answers, vegetarian: true})
                        props.goToStep(6);
                    }}/>
                    <FormControlLabel value={false} control={<Radio />} label="No" onClick = {() => {
                        answersContext?.setAnswers({...answersContext.answers, vegetarian: false})
                        props.goToStep(4);
                    }} />
                </RadioGroup>
            </FormControl>
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
            <img src={Salad} style={{ width: 80, height: 80, position: "relative", top: 32 }} />
        </div>
        <div style={{ width: 450, height: 103 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: 15, flexDirection: "row", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Button onClick={() => props.goToStep(2)}>
                        <ArrowCircleLeft style={{ color: '#c89474', fontSize: 50 }} />
                    </Button>
                    <img src={Vegetarian1} style={{ width: 80, height: 80 }} />
                </div>
                <img src={Vegetarian2} style={{ width: 80, height: 80, position: "relative", top: 12 }} />
            </div>
        </div>
    </div>
}
