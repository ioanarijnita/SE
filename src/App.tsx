import React, { useState, createContext } from 'react';
import Choice from './assets/choice.png'
import StepWizard from "react-step-wizard";
import { WizardStep1 } from './wizard-steps/wizard-step1';
import { WizardStep2 } from './wizard-steps/wizard-step2';
import { WizardStep3 } from './wizard-steps/wizard-step3';
import { WizardStep4 } from './wizard-steps/wizard-step4';
import { WizardStep5 } from './wizard-steps/wizard-step5';
import { WizardStep6 } from './wizard-steps/wizard-step6';
import { WizardStep7 } from './wizard-steps/wizard-step7';
import { WizardStep8 } from './wizard-steps/wizard-step8';
import { WizardStep9 } from './wizard-steps/wizard-step9';
import { WizardStep10 } from './wizard-steps/wizard-step10';
import { WizardStep11 } from './wizard-steps/wizard-step11';
import { WizardStep12 } from './wizard-steps/wizard-step12';
import { RestaurantType } from './inference/inference';

export type Answers = {
  vegan?: boolean;
  vegetarian?: boolean;
  meatType?: string[];
  specific?: string;
  averageMealPrice?: number;
  neighbourhood?: string;
  delivery?: boolean;
  rating?: number;
  outsideSeating?: boolean;
}

export const AnswersContext = createContext<{ answers?: Answers, setAnswers: (answer: Answers) => void } | null>(null);
export const ResultContext = createContext<{ result?: RestaurantType, setResult: (restaurant: RestaurantType) => void } | null>(null);

function App() {
  const [isOnFirstPage, setIsOnFirstPage] = useState(true);
  const [answers, setAnswers] = useState<Answers>();
  const [result, setResult] = useState<RestaurantType>();

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: "100%", position: 'absolute', width: "100%" }}>
      <div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ backgroundColor: '#f0ece4', borderTopLeftRadius: 24 }}>
            <p style={{ textAlign: 'center', fontWeight: '1000', padding: 20, color: '#7991BD', fontSize: 24 }}>
              <p>
                HERE FOR
              </p>
              <p>
                RESTAURANTS
              </p>
              <p>
                RECOMMENDATIONS
              </p>
              <img style={{ width: 200, height: 150 }} src={Choice}></img>
            </p>
          </div>
          <div style={{ backgroundColor: '#ecac7b', alignSelf: 'flex-start', borderBottomLeftRadius: 24, width: 302 }}>
            <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18, color: 'white' }}>Don't know what to choose?</p>
            <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18, color: 'white' }}>Let us decide!</p>
          </div>
        </div>
      </div>
      <AnswersContext.Provider value={{ answers, setAnswers }}>
        <ResultContext.Provider value={{ result, setResult }}>
          <StepWizard >
            <WizardStep1 />
            <WizardStep2 />
            <WizardStep3 />
            <WizardStep4 />
            <WizardStep5 />
            <WizardStep6 />
            <WizardStep7 />
            <WizardStep8 />
            <WizardStep9 />
            <WizardStep10 />
            <WizardStep11 />
            <WizardStep12 />
          </StepWizard>
        </ResultContext.Provider>
      </AnswersContext.Provider>
    </div>
  );
}

export default App;
