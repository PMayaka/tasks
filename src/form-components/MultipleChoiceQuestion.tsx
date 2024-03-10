import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);

    function updateChoice(e: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(e.target.value);
    }
    return (
        <div>
            <Form.Group controlId="Multiple Choice">
                <Form.Label>Options</Form.Label>
                <Form.Select value={choice} onChange={updateChoice}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

            {expectedAnswer === choice ? <p>✔️</p> : <p>❌</p>}
        </div>
    );
}
