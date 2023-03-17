import * as React from "react";

type InfoProps = {
    steviloIgralcev: number;
};

export const Info: React.FC<InfoProps> = ({ steviloIgralcev }) => {
    if (steviloIgralcev >= 11) {
        return <div>Ekipa ima dovolj igralcev!</div>;
    } else {
        return null;
    }
};
