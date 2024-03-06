import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday = "🎄" | "🎉" | "🐇" | "🎁" | "☀️";
    const [order, setOder] = useState<Holiday>("🎄");

    const HOLIDAY_ALPHABET: Record<Holiday, Holiday> = {
        "🎁": "🎄",
        "🎄": "🐇",
        "🐇": "🎉",
        "🎉": "☀️",
        "☀️": "🎁"
    };

    const HOLIDAY_YEAR: Record<Holiday, Holiday> = {
        "🎉": "🎁",
        "🎁": "🐇",
        "🐇": "☀️",
        "☀️": "🎄",
        "🎄": "🎉"
    };
    const holidayAlp = HOLIDAY_ALPHABET[order];
    const holidayYear = HOLIDAY_YEAR[order];

    return (
        <div>
            Holiday: {order}
            <button onClick={() => setOder(holidayAlp)}>
                Advance by Alphabet
            </button>
            <button onClick={() => setOder(holidayYear)}>
                Advance by Year
            </button>
        </div>
    );
}
