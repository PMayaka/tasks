import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, isStudent] = useState<boolean>(true);

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            {!editMode && (
                <div>
                    <p>
                        {name} is {student ? "a student" : "not a student"}
                    </p>
                </div>
            )}
            {editMode && (
                <Form.Check
                    type="checkbox"
                    id="checkbox"
                    label="Student box"
                    checked={student}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        isStudent(e.target.checked)
                    }
                />
            )}
            <Form.Switch
                type="switch"
                id="switch"
                label="Edit Mode"
                checked={editMode}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEditMode(e.target.checked)
                }
            />
            {editMode && (
                <Form.Group controlId="formExpectedAnswer" as={Row}>
                    <Form.Label column sm={2}>
                        Edit Mode
                    </Form.Label>
                    <Col>
                        <Form.Control value={name} onChange={updateName} />
                    </Col>
                </Form.Group>
            )}
        </div>
    );
}
