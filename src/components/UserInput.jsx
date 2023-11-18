import { useState } from "react";

function UserInput({onChange,userInput,click}) {

  return (
    <section id='user-input'>
        <div className="input-group">
            <p>
            <label  >Initial Investment</label>
            <input type="number" value={userInput.initialInvestment} onChange={()=>onChange('initialInvestment',event.target.value)} required/>
            </p>
            <p>
            <label >Annual Investment</label>
            <input type="number" value={userInput.annualInvestment} required onChange={()=>onChange('annualInvestment',event.target.value)} />
            </p>
        </div>
        <div className="input-group">
            <p>
            <label>Expected Return</label>
            <input type="number" id="#user-input input" value={userInput.expectedReturn} required onChange={()=>onChange('expectedReturn',event.target.value)} />
            </p>
           <p>
           <label >Duration</label>    
            <input type="number" value={userInput.duration} required onChange={()=>onChange('duration',event.target.value)} />
           </p>
        </div>
        <button onClick={click}>Calculate</button>
    </section>
  );
}

export default UserInput
