import type {NextPage} from 'next'
import React, {useState, useEffect} from 'react'
import Game from '../components/Game'
import Win from '../components/Win'
import Loss from '../components/Loss'

const Home: NextPage = () => {

    const [random_number, setRandomNumber] = useState(0);
    const [result, setResult] = useState(-2);

    useEffect(() => {
        setRandomNumber(Math.floor((Math.random() * 100) + 1));
    }, [])

    let reset = () => {
        setRandomNumber(Math.floor((Math.random() * 100) + 1));
        setAttempts(0);
        setUserNumber(0);
        setResult(-2);
    }

    let [attempts, setAttempts] = useState(0);
    let [user_number, setUserNumber] = useState(0);

    return (
        <div className="container">
            <div>Jogo da adivinhação</div>
            {user_number}
            {result != 0 && attempts < 5 ?
                <Game setUserNumber={setUserNumber} random_number={random_number} result={result} attempts={attempts} />
                : attempts < 5 || result == 0 ? <Win reset={reset} attempts={attempts} /> : <Loss reset={reset} />}

            {result != 0 && attempts < 5 &&
                <input type="button" value="Enviar" onClick={
                    () => {
                        if (user_number >= 0 && user_number <= 100) {
                            setResult(user_number < random_number ? -1 : user_number > random_number ? 1 : 0);
                            setAttempts(attempts += 1);
                        }
                        else {
                            alert("Número fora do intervalo pedido");
                        }
                    }
                } />
            }
        </div>
    )
}

export default Home
