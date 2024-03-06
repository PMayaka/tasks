import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Question, QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [state, setState] = useState<QuestionType>("short_answer_question");

    type question = "multiple_choice_question" | "short_answer_question";
    const QUESTION_TRANSITIONS: Record<QuestionType, QuestionType> = {
        multiple_choice_question: "short_answer_question",
        short_answer_question: "multiple_choice_question"
    };

    const newQuestion = QUESTION_TRANSITIONS[state];

    return (
        <div>
            current question type:
            {state === "short_answer_question" ? (
                <span>Short Answer</span>
            ) : (
                <span>Multiple Choice</span>
            )}
            <button onClick={() => setState(newQuestion)}>Change Type</button>
        </div>
    );
}
