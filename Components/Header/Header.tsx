import * as React from 'react';
import {SeznamEkip} from '../SeznamEkip'

interface HeaderProps {
    teamName: string;
}

export const Header = (props: HeaderProps): JSX.Element => {
    const { teamName } = props;

    return (
        <React.Fragment>
            <div>
                <h1>{teamName}</h1>
                <SeznamEkip />
            </div>
        </React.Fragment>
    );
};
