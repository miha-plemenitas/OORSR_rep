import * as React from 'react';
import { IgralecProps } from '../Igralec';
import { ekipe, EkipaProps, Igralec, SeznamEkip } from '../SeznamEkip';
import { Ekipa, SeznamIgralcev } from '../../index';

type DodajIgralcaProps = {
  addPlayer: (player: Igralec, team: EkipaProps) => void;
};

const playerInitialState = {
  ime: '',
  starost: 0,
  stDresa: 0,
  pozicija: '',
  poskodovan: false,
};

export const DodajIgralca = ({ addPlayer }: DodajIgralcaProps) => {
  const [player, setPlayer] = React.useState<Igralec>(playerInitialState);
  const [team, setTeam] = React.useState<EkipaProps>(ekipe[0]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newPlayer: Igralec = {
      ...player,
    };
    const updatedTeam: EkipaProps = {
      ...team,
      igralci: [...team.igralci, newPlayer], // add the new player to the team
    };
    console.log('New player:', newPlayer);
    console.log('Updated team:', updatedTeam);
    addPlayer(player, updatedTeam);
    setPlayer(playerInitialState);
    setTeam(updatedTeam);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setPlayer((prevPlayer: Igralec) => {
      const newPlayer = {
        ...prevPlayer,
        [name]:
          name === 'starost' || name === 'stDresa'
            ? parseInt(value, 10)
            : name === 'poskodovan'
            ? e.target.checked
            : value,
      };
      console.log('New player state:', newPlayer);
      return newPlayer;
    });
  };

  const handleTeamChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const selectedTeam = ekipe.find((team) => team.id === parseInt(value, 10));
    if (selectedTeam) {
      console.log('Selected team:', selectedTeam);
      setTeam(selectedTeam);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          IME:
          <input name="ime" value={player.ime} onChange={handleChange} />
          <br />
        </label>
        <label>
          STAROST:
          <input
            name="starost"
            type="number"
            value={player.starost}
            onChange={handleChange}
          />
          <br />
        </label>
        <label>
          ST DRESA:
          <input
            name="stDresa"
            type="number"
            value={player.stDresa}
            onChange={handleChange}
          />
          <br />
        </label>
        <label>
          POZICIJA:
          <input
            name="pozicija"
            value={player.pozicija}
            onChange={handleChange}
          />
          <br />
        </label>
        <label>
          POSKODOVAN:
          <input
            name="poskodovan"
            type="checkbox"
            checked={player.poskodovan}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Team:
          <select value={team.id} onChange={handleTeamChange}>
            {ekipe.map((team) => (
              <option key={team.id} value={team.id}>
                {team.title}
              </option>
            ))}
          </select>
        </label>
        <br />
        <br />
        <button type="submit">Add Player</button>
      </form>
      <Ekipa team={team} />
    </div>
  );
};
