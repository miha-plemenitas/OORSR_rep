import * as React from 'react';

//The keyword "type" is used in TypeScript to define a new type alias. In this case, the code is defining a new type alias called "IgralecProps". This type alias is an object type that specifies the properties of a player in a sport.
// By defining a type alias, you can create a custom type that can be used throughout your codebase, just like any other data type.

//The code defines a TypeScript interface called IgralecProps which describes the shape of an object with the following properties:
type IgralecProps = {
    ime: string;
    starost: number;
    stDresa: number;
    pozicija: string;
    poskodovan: boolean;
};

export const Igralec: React.FC<IgralecProps> = ({ ime, starost, stDresa, pozicija, poskodovan }) => {
    return (
        <div>
            <h3>{ime}</h3>
            <p>Starost: {starost}</p>
            <p>Št. dresa: {stDresa}</p>
            <p>Pozicija: {pozicija}</p>
            <p>Poškodovan: {poskodovan ? "true" : "false"}</p>
        </div>
    );
};
