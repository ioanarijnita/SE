import Button from '@mui/material/Button';
import { useContext } from 'react';
import { AnswersContext, ResultContext } from '../App';
import RestaurantIcon from "../assets/restaurant.jpg";
import Pin from "../assets/pin.png";
import { Chip, Rating } from '@mui/material';


export function WizardStep12(props: any) {
    const answersContext = useContext(AnswersContext);
    const resultContext = useContext(ResultContext);

    return <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#f0d4c4', borderBottomRightRadius: 24, borderTopRightRadius: 24, height: 546 }}>
        <div style={{ width: 450, position: "relative", left: 18, }}>
        </div>
        <img src={RestaurantIcon} style={{ width: "100%", height: 250, marginBottom: 12 }} />
        {resultContext?.result ? <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Rating name="read-only" value={resultContext?.result.rating} readOnly style={{ color: "purple" }} />
            <span style={{ fontSize: 28 }}>{resultContext?.result.name}</span>
            <div style={{ marginLeft: 64, marginTop: 24, display: "flex", flexDirection: "column", width: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", }}>
                    <img src={Pin} style={{ width: 20, height: 20 }} />
                    <span>Address: {resultContext?.result.streetName}</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", width: 440 }}>
                    {answersContext?.answers?.vegan && <Chip label="Vegan" variant="outlined" style={{ width: 100, marginTop: 10, marginRight: 5, backgroundColor: "purple", color: "white", fontWeight: "600" }} />}
                    {answersContext?.answers?.vegetarian && <Chip label="Vegetarian" variant="outlined" style={{ width: 100, marginTop: 10, marginRight: 5, backgroundColor: "purple", color: "white", fontWeight: "600" }} />}
                    {answersContext?.answers?.meatType?.length && answersContext.answers.meatType.map(type => <Chip label={type} variant="outlined" style={{ width: 100, marginRight: 5, marginTop: 10, backgroundColor: "purple", color: "white", fontWeight: "600" }} />)}
                    {resultContext?.result.specific && <Chip label={resultContext?.result.specific} variant="outlined" style={{ width: 100, marginTop: 10, marginRight: 5, backgroundColor: "purple", color: "white", fontWeight: "600" }} />}
                    {resultContext?.result.neighbourhood && <Chip label={resultContext?.result.neighbourhood} variant="outlined" style={{ width: 130, marginTop: 10, marginRight: 5, backgroundColor: "purple", color: "white", fontWeight: "600" }} />}
                    {answersContext?.answers?.delivery && <Chip label="Delivery" variant="outlined" style={{ width: 100, marginTop: 10, backgroundColor: "purple", marginRight: 5, color: "white", fontWeight: "600" }} />}
                    {answersContext?.answers?.outsideSeating && <Chip label="Outside seating" variant="outlined" style={{ width: 150, marginTop: 10, marginRight: 5, backgroundColor: "purple", color: "white", fontWeight: "600" }} />}
                </div>
            </div>
        </div> : <div style={{ textAlign: "center" }}>No restaurant found with your preferences.</div>}
        <div style={{ flexGrow: 1 }}></div>
        <Button variant="contained" style ={{backgroundColor: "purple", fontWeight: "bold"}} onClick={() => {
            window.location.reload();
        }}>
            <p>RESTART</p>
        </Button>
    </div>
}
