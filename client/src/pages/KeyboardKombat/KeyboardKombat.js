import './KeyboardKombat.scss';
import socket from '../../socketConfig';
import { useNavigate } from 'react-router-dom';
import StartButton from '../../components/StartButton/StartButton';
import Timer from '../../components/Timer/Timer';
import ShowText from '../../components/ShowText/ShowText';
import UserInput from '../../components/UserInput/UserInput';
import ProgressBar from '../../components/ProgressBar/Progressbar';
import ScoreBoard from '../../components/ScoreBoard/ScoreBoard';
import KombatCode from '../../components/KombatCode/KombatCode';

const findPlayer = (players) => {
    return players.find(player => player.socketID === socket.id);
}

const KeyboardKombat = ({ kombatState }) => {
    const navigate = useNavigate();
    const {_id, text, isOpen, isOver, players} = kombatState;
    const player = findPlayer(players);

    console.log("Kombat State",kombatState);


    if (_id === "") {
        navigate("/kombat");
    }

    return ( 
        <div className="keyboard-kombat">
            <Timer />
            <ShowText text={text} player={player} />
            <UserInput isOpen={isOpen} isOver={isOver} kombatID={_id}/>
            <ProgressBar players={players} player={player} textLength={text.length}/>
            <StartButton player={player} kombatID={_id} />
            <KombatCode kombatID={_id} />
            <ScoreBoard players={players} />
        </div>
     );
}

export default KeyboardKombat;