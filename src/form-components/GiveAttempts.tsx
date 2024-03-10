import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [addAttempts, setAddAttempts] = useState<number>(0);

    function decreaseAttempts() {
        setAttempts(attempts - 1);
    }
    function increaseAttempts() {
        setAttempts(attempts + addAttempts);
    }
    return (
        <div>
            <p> Number of attempts left: {attempts} </p>
            <Form.Group controlId="formAddAttempts">
                <Form.Label>Add Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={addAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        const value = parseInt(event.target.value);
                        setAddAttempts(isNaN(value) ? 0 : value);
                    }}
                ></Form.Control>
            </Form.Group>
            <button onClick={decreaseAttempts} disabled={attempts <= 0}>
                use
            </button>
            <button onClick={increaseAttempts}>gain</button>
        </div>
    );
}
