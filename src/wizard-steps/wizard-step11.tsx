import Food from './../assets/food.png'
import Button from '@mui/material/Button';
import { ArrowCircleLeft } from '@mui/icons-material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Outdoor from "../assets/outdoor.png";
import PlantBased from "../assets/plant-based.png";
import { useContext } from 'react';
import { AnswersContext, ResultContext } from '../App';
import { calculateBestOption } from '../inference/inference';

export function WizardStep11(props: any) {
    const answersContext = useContext(AnswersContext);
    const resultContext = useContext(ResultContext);

    return <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#f0d4c4', borderBottomRightRadius: 24, borderTopRightRadius: 24, height: 546 }}>
        <div style={{ width: 450 }}>
            <p style={{ fontSize: 48, fontWeight: "bold", textAlign: "center", position: "relative", top: 24, color: '#7991BD', opacity: 0 }}>Let's start...</p>
            <FormControl style={{ marginTop: 48, marginLeft: 24 }}>
                <FormLabel id="demo-radio-buttons-group-label" style={{ fontSize: 32 }}>Do you need an outside seating option?</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    style={{ display: "flex", flexDirection: "row", justifyContent: 'space-around', width: 300, marginTop: 24 }}
                >
                    <FormControlLabel value={true} control={<Radio />} label="Yes" onClick={() => {
                        answersContext?.setAnswers({ ...answersContext.answers, outsideSeating: true });
                        const generatedRestaurant = calculateBestOption({...answersContext?.answers!, outsideSeating: true});
                        resultContext?.setResult(generatedRestaurant!);
                        props.goToStep(12);
                    }} />
                    <FormControlLabel value={false} control={<Radio />} label="No" onClick={() => {
                        answersContext?.setAnswers({ ...answersContext.answers, outsideSeating: false })
                        const generatedRestaurant = calculateBestOption({...answersContext?.answers!, outsideSeating: false});
                        resultContext?.setResult(generatedRestaurant!);
                        props.goToStep(12);
                    }} />
                </RadioGroup>
            </FormControl>
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
            {/* <img src={VeganGif} style={{ width: 90, height: 90, position: "relative", top: 24 }} /> */}
        </div>
        <div style={{ width: 450, height: 103 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: 15, flexDirection: "row", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Button onClick={() => props.goToStep(10)}>
                        <ArrowCircleLeft style={{ color: '#c89474', fontSize: 50 }} />
                    </Button>
                    {/* <img src={PlantBased} style={{ width: 100, height: 100, position: "relative", bottom: 12 }} /> */}
                </div>
                <img src={Outdoor} style={{ width: 180, height: 180}} />
            </div>
        </div>
    </div>
}
