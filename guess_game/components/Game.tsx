
export default function Game({attempts, random_number, result, setUserNumber}) {

    return (
        <div>
            <div>Qual o número sorteado?(entre 1 e 100)</div>
            <div>{result < 0 ? <div> O número sorteado é maior</div> : <div>O número sorteado é menor</div>}</div>
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
                            onChange={event => setUserNumber(event.target.value)}
                        />

                    </div>
                </fieldset>
            </form>
        </div>
    )

}
