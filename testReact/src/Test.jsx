import React, { useState } from "react";
import { TestStyles } from "./testStyles";

export function Finish({ toggleList }) {
    return (
        <TestStyles>
            <button className="buttonn" type="button" onClick={toggleList}>
                Finalizadas
            </button>
        </TestStyles>
    );
}

export function FinishList() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleList = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div title="Lista de tarefas finalizadas">
            <Finish toggleList={toggleList} />
            {isVisible && (
                <div>
                    <p title="P">Lista de tarefas finalizadas</p>
                </div>
            )}
        </div>
    );
}

// export function ShowMoney() {

// }