import Button from '@mui/material/Button';
import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Neighbourhood from "../assets/neighbourhood.png";
import { InputLabel, Select, OutlinedInput, Box, Chip, MenuItem, SelectChangeEvent, Theme, useTheme } from '@mui/material';
import { useContext, useState } from 'react';
import { AnswersContext } from '../App';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const neighbourhoods = [
    'Ronat',
    'Mehala',
    'Blascovici',
    'Circumvalatiunii',
    'Dacia',
    'Torontalului',
    'Aradului',
    'Lipovei',
    'Modern',
    'Fabric',
    'Soarelui',
    'Girocului',
    'Balcescu',
    'Sagului',
    'Freidorf',
    'Centru'
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

// here should arrive all users, including vegan, vegetarian & meat lovers
export function WizardStep8(props: any) {
    const [neighbourhood, setNeighbourhood] = useState<string>();
    const answersContext = useContext(AnswersContext);
    const theme = useTheme();
    const handleChange = (event: SelectChangeEvent<typeof neighbourhood>) => {
        const {
            target: { value },
        } = event;
        setNeighbourhood(
            value
            // On autofill we get a stringified value.
            // typeof value === 'string' ? value.split(',') : value,
        );
    };

    return <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#f0d4c4', borderBottomRightRadius: 24, borderTopRightRadius: 24, height: 546 }}>
        <div style={{ width: 450, position: "relative", left: 18, }}>
            <p style={{ fontSize: 48, fontWeight: "bold", textAlign: "center", position: "relative", top: 24, color: '#7991BD', opacity: 0 }}>Let's start...</p>
            <FormLabel style={{ fontSize: 32 }}>Do you have any preferences for the neighbourhood?</FormLabel>
            <br/>

            <FormControl sx={{ m: 1, width: 300, position: "relative", right: 8 }}>

                <InputLabel id="demo-multiple-chip-label">Neighbourhood</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    // multiple
                    value={neighbourhood}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    // renderValue={(selected) => (
                    //     <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    //         {selected.map((value) => (
                    //             <Chip key={value} label={value} />
                    //         ))}
                    //     </Box>
                    // )}
                    MenuProps={MenuProps}
                >
                    {neighbourhoods.map((hood) => (
                        <MenuItem
                            key={hood}
                            value={hood}
                            // style={getStyles(hood, neighbourhood, theme)}
                        >
                            {hood}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
            {/* <img src={VeganGif} style={{ width: 90, height: 90, position: "relative", top: 24 }} /> */}
        </div>
        <div style={{ width: 450, height: 103 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: 15, flexDirection: "row", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Button onClick={() => props.goToStep(7)}>
                        <ArrowCircleLeft style={{ color: '#c89474', fontSize: 50 }} />
                    </Button>
                    {/* <img src={PlantBased} style={{ width: 100, height: 100, position: "relative", bottom: 12 }} /> */}
                </div>
                <Button onClick={() => {
                        answersContext?.setAnswers({ ...answersContext.answers, neighbourhood: neighbourhood })
                    props.goToStep(9);
                }}>
                        <ArrowCircleRight style={{ color: '#c89474', fontSize: 50 }} />
                    </Button>
                <img src={Neighbourhood} style={{ width: 130, height: 130, position: 'relative', top: 50}} />
            </div>
        </div>
    </div>
}
