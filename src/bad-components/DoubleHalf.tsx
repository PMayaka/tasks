import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    function Doubler() {
        setDhValue(2 * dhValue);
    }

    function Halver() {
        setDhValue(0.5 * dhValue);
    }
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <button onClick={Doubler}> Double </button>
            <button onClick={Halver}> Halver </button>
        </div>
    );
}
