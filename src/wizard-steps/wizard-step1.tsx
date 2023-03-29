import Food from './../assets/food.png'
import Button from '@mui/material/Button';
import ArrowCircleRight from '@mui/icons-material/ArrowCircleRight';

export function WizardStep1(props: any) {
    return <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#f0d4c4', borderBottomRightRadius: 24, borderTopRightRadius: 24 }}>
        <div>
            <img style={{ width: 450, height: 318, marginTop: 120 }} src={Food}></img>
        </div>
        <div style={{ width: 450, height: 103 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: 15 }}>
                <text style={{ color: '#7991BD', fontWeight: 'bold', fontSize: 16, marginLeft: 8, marginRight: 5 }}>Take the quiz and find what you really want</text>
                <Button onClick={() => props.goToStep(2)}>
                    <ArrowCircleRight style={{ color: '#c89474', fontSize: 50 }} />
                </Button>
            </div>
        </div>
    </div>
}
