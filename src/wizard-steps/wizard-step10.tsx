import Food from './../assets/food.png'
import Button from '@mui/material/Button';
import { ArrowCircleLeft } from '@mui/icons-material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Vegan from "../assets/vegan.png";
import PlantBased from "../assets/plant-based.png";
import VeganGif from "../assets/vegan.gif";
import Star from "../assets/star.png";
import { useContext } from 'react';
import { AnswersContext } from '../App';

export function WizardStep10(props: any) {
    const answersContext = useContext(AnswersContext);
    const StarEl = () => <img src={Star} style = {{width: 20, height: 20, marginRight: 8}}></img>;

    return <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#f0d4c4', borderBottomRightRadius: 24, borderTopRightRadius: 24, height: 546 }}>
        <div style={{ width: 450 }}>
            <p style={{ fontSize: 48, fontWeight: "bold", textAlign: "center", position: "relative", top: 24, color: '#7991BD', opacity: 0 }}>Let's start...</p>
            <FormControl style={{ marginTop: 48, marginLeft: 24 }}>
                <FormLabel id="demo-radio-buttons-group-label" style={{ fontSize: 32 }}>Choose from best options</FormLabel>
                <FormLabel id="demo-radio-buttons-group-label" style={{ fontSize: 16  }}>Restaurants with rating...</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    style={{ display: "flex", flexDirection: "row", width: 400, justifyContent: "center", marginTop: 24, }}
                >
                    <div style = {{display: "flex", justifyContent: "space-around" }}>
                    <FormControlLabel value={1} control={<Radio />} label={<><StarEl /></>} onClick={() => {
                        answersContext?.setAnswers({ ...answersContext.answers, rating: 1 })
                        props.goToStep(11);
                    }} />
                    <FormControlLabel value={2} control={<Radio />} label={<><StarEl /> <StarEl /></>} onClick={() => {
                        answersContext?.setAnswers({ ...answersContext.answers, rating: 2 })
                        props.goToStep(11);
                    }} />
                    <FormControlLabel value={3} control={<Radio />} label={<><StarEl/><StarEl/><StarEl/></>} onClick={() => {
                        answersContext?.setAnswers({ ...answersContext.answers, rating: 3 })
                        props.goToStep(11);
                    }} />
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div>
                    <FormControlLabel value={4} control={<Radio />} label= {<><StarEl/><StarEl/><StarEl/><StarEl/></>}onClick={() => {
                        answersContext?.setAnswers({ ...answersContext.answers, rating: 4 })
                        props.goToStep(11);
                    }} />
                    <FormControlLabel value={5} control={<Radio />} label={<><StarEl/><StarEl/><StarEl/><StarEl/><StarEl/></>} onClick={() => {
                        answersContext?.setAnswers({ ...answersContext.answers, rating: 5 })
                        props.goToStep(11);
                        }} />
                    </div>
                </RadioGroup>
            </FormControl>
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
            {/* <img src={VeganGif} style={{ width: 90, height: 90, position: "relative", top: 24 }} /> */}
        </div>
        <div style={{ width: 450, height: 103 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: 15, flexDirection: "row", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Button onClick={() => props.goToStep(9)}>
                        <ArrowCircleLeft style={{ color: '#c89474', fontSize: 50 }} />
                    </Button>
                    {/* <img src={PlantBased} style={{ width: 100, height: 100, position: "relative", bottom: 12 }} /> */}
                </div>
                {/* <img src={Vegan} style={{ width: 70, height: 70, }} /> */}
            </div>
        </div>
    </div>
}
