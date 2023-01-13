import React, { useState } from 'react';

function Slides({slides}) {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" disabled={count === 0} className="small outlined" onClick={() => setCount(0)}>Restart</button>
                <button data-testid="button-prev" disabled={count === 0} className="small" onClick={() => setCount(count-1)}>Prev</button>
                <button data-testid="button-next" disabled={count === slides.length-1} className="small" onClick={() => setCount(count+1)}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[count].title}</h1>
                <p data-testid="text">{slides[count].text}</p>
            </div>
        </div>
    );

}

export default Slides;
