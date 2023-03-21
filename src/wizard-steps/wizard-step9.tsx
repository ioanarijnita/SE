import Food from './../assets/food.png'
import Button from '@mui/material/Button';
import { ArrowCircleLeft } from '@mui/icons-material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Delivery from "../assets/delivery.png";
import PlantBased from "../assets/plant-based.png";

export function WizardStep9(props: any) {

    return <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#f0d4c4', borderBottomRightRadius: 24, borderTopRightRadius: 24, height: 546 }}>
        <div style={{ width: 450 }}>
            <p style={{ fontSize: 48, fontWeight: "bold", textAlign: "center", position: "relative", top: 24, color: '#7991BD', opacity: 0 }}>Let's start...</p>
            <FormControl style={{ marginTop: 48, marginLeft: 24 }}>
                <FormLabel id="demo-radio-buttons-group-label" style={{ fontSize: 32 }}>Do you need a delivery option?</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    style={{ display: "flex", flexDirection: "row", justifyContent: 'space-around', width: 300, marginTop: 24 }}
                >
                    <FormControlLabel value={true} control={<Radio />} label="Yes" onClick={() => props.goToStep(10)} />
                    <FormControlLabel value={false} control={<Radio />} label="No" onClick={() => props.goToStep(10)} />
                </RadioGroup>
            </FormControl>
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
            {/* <img src={VeganGif} style={{ width: 90, height: 90, position: "relative", top: 24 }} /> */}
        </div>
        <div style={{ width: 450, height: 103 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: 15, flexDirection: "row", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Button onClick={() => props.goToStep(8)}>
                        <ArrowCircleLeft style={{ color: '#c89474', fontSize: 50 }} />
                    </Button>
                    {/* <img src={PlantBased} style={{ width: 100, height: 100, position: "relative", bottom: 12 }} /> */}
                </div>
                <img src={Delivery} style={{ width: 120, height: 120, position:'relative', right: 50, top: 32}} />
            </div>
        </div>
    </div>
}
