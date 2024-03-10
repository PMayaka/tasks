import React, { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
//what are they talking about

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="formExpectedAnswer" as={Row}>
                <Form.Label column sm={2}>
                    Answer?
                </Form.Label>
                <Col>
                    <Form.Control value={userAnswer} onChange={updateAnswer} />
                </Col>
            </Form.Group>
            <div>
                The userAnswer is{" "}
                {userAnswer === expectedAnswer ? <p>✔️</p> : <p>❌</p>}.
            </div>
        </div>
    );
}
