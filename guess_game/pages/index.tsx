import type {NextPage} from 'next'
import React, {useState, useEffect} from 'react'

const Home: NextPage = () => {
    const [random_number, setRandomNumber] = useState(0);

    useEffect(() => {
        setRandomNumber(Math.floor((Math.random() * 100) + 1));
    }, [])

    let [attempts, _setAttempts] = useState(0);
    let [user_number, setUserNumber] = useState(0);
    return (
        <div>
            <div>Jogo da adivinhação</div>
            <div>Qual o número sorteado?(entre 1 e 100)</div>
            <div> O número Chutado foi {user_number} o número escolhido foi {random_number} a quantidade de tentativas foram {attempts}</div>
            <form id="app-guess" >
                <fieldset>
                    <legend>Informe um número</legend>
                    <div>
                        <label htmlFor="user-number">Número chutado:</label>
                        <input
                            name="user-number"
                            type="number"
                            placeholder="Seu número chutado é"
                            required
                            autoFocus
                            onChange={(event) => setUserNumber(+event.target.value)}
                        />

                    </div>
                </fieldset>
                <input type="button" value="Enviar" />
            </form>
        </div>
    )
}

export default Home
