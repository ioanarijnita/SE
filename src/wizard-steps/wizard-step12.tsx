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

export function WizardStep12(props: any) {

    return <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#f0d4c4', borderBottomRightRadius: 24, borderTopRightRadius: 24, height: 546 }}>
        <div style={{ width: 450, position: "relative", left: 18, }}>
            <p style={{ fontSize: 48, fontWeight: "bold", textAlign: "center", position: "relative", top: 24, color: '#7991BD', opacity: 0 }}>Let's start...</p>
                <FormLabel id="demo-radio-buttons-group-label" style={{ fontSize: 32 }}>END</FormLabel>
                <br />
                <FormLabel id="demo-radio-buttons-group-label" style={{ fontSize: 16 }}>The restaurants we found are: Don't know yet.</FormLabel>
               
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
            {/* <img src={VeganGif} style={{ width: 90, height: 90, position: "relative", top: 24 }} /> */}
        </div>
        <div style={{ width: 450, height: 103, position: "relative", left: 18, }}>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: 15, flexDirection: "row", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Button onClick={() => props.goToStep(1)}>
                        <p>RESTART</p>
                    </Button>
                    {/* <img src={PlantBased} style={{ width: 100, height: 100, position: "relative", bottom: 12 }} /> */}
                </div>
                {/* <img src={Vegan} style={{ width: 70, height: 70, }} /> */}
            </div>
        </div>
    </div>
}
