import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface ChangeColorProps {
    onChange: (index: number) => void;
}

function ChangeColor({ onChange }: ChangeColorProps): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    function nextColor() {
        const newIndex = (colorIndex + 1) % COLORS.length;
        setColorIndex(newIndex);
        onChange(newIndex);
    }

    return <Button onClick={nextColor}>Next Color</Button>;
}

interface ColorPreviewProps {
    color: string;
}

function ColorPreview({ color }: ColorPreviewProps): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: color,
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [currentColorIndex, setCurrentColorIndex] =
        useState<number>(DEFAULT_COLOR_INDEX);

    function handleColorChange(index: number) {
        setCurrentColorIndex(index);
    }

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[currentColorIndex]}</span>
            <div>
                <ChangeColor onChange={handleColorChange} />
                <ColorPreview color={COLORS[currentColorIndex]} />
            </div>
        </div>
    );
}
