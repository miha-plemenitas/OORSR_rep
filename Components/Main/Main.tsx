import * as React from 'react';
import { Igralec } from '../Igralec';
import { Outlet } from 'react-router-dom';
import { DodajIgralca } from "./DodajIgralca";

export const Main = () => {
    return (
        <div style={{ border: '1px solid red' }}>
            <div>
            </div>
            <DodajIgralca addPlayer={(player) => console.log(player)} />
        </div>
    );
};