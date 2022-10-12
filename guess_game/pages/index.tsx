import type {NextPage} from 'next'
import React, {useState, useEffect} from 'react'

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
        <div>
            <div>Jogo da adivinhação</div>

            {
                result != 0 && attempts < 5 ?
                    <div>
                        <div>Qual o número sorteado?(entre 1 e 100)</div>
                        {attempts} - {random_number} - {result}
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
                            <input type="button" value="Enviar" onClick={
                                () => {
                                    setResult(user_number < random_number ? -1 : user_number > random_number ? 1 : 0);
                                    setAttempts(attempts += 1);
                                }
                            } />
                        </form>
                    </div> : <div>
                        O jogo acabou {attempts < 5 ? <div> voce ganhou em {attempts} tentativa{attempts > 1 && <span>s</span>}</div> : <div>você perdeu</div>}
                        <input type="button" value="Reiniciar" onClick={() => reset()} /></div>
            }
        </div >
    )
}

export default Home
