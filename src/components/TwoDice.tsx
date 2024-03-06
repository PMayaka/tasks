import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    //const die: number[] = [1, 2, 3, 4, 5, 6];
    const [dice, setDice] = useState<number>(0);
    const [dice2, setDice2] = useState<number>(1);
    return (
        <div>
            The dice 1 is <span data-testid="left-die">{dice}</span>
            The dice 2 is <span data-testid="right-die">{dice2}</span>
            <button onClick={() => setDice(d6)}> Roll Left</button>
            <button onClick={() => setDice2(d6)}> Roll Right</button>
            {dice === 1 && dice2 == 1 ? (
                <div>Lose</div>
            ) : dice === dice2 ? (
                <div>Win</div>
            ) : (
                <div>Nothing</div>
            )}
        </div>
    );
}
