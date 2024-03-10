import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "yellow",
        "magenta",
        "teal"
    ];
    const DEFAULT_COLOUR = COLORS[0];
    const [color, setColor] = useState<string>(DEFAULT_COLOUR);

    function updateColor(evt: React.ChangeEvent<HTMLInputElement>) {
        setColor(evt.target.value);
    }
    return (
        <div>
            {COLORS.map((colorZ: string) => (
                <Form.Check
                    key={colorZ}
                    inline
                    type="radio"
                    name="response"
                    onChange={updateColor}
                    id={`Choose-Color-${colorZ}`}
                    label={
                        <span style={{ backgroundColor: colorZ }}>
                            {colorZ}
                        </span>
                    }
                    value={colorZ}
                    checked={color === colorZ}
                />
            ))}
            <p>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
            </p>
        </div>
    );
}
