import * as React from "react";

type OpozoriloProps = {
    steviloIgralcev: number;
};

export const Opozorilo: React.FC<OpozoriloProps> = ({ steviloIgralcev }) => {
    return (
        <div>
            {steviloIgralcev < 11 ? (
                <p>Ekipa ima premalo igralcev!</p>
            ) : null}
        </div>
    );
};
