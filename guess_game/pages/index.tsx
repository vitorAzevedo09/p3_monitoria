import type {NextPage} from 'next'

let random_number: number = Math.floor((Math.random() * 100) + 1);
let attemps: number = 0;
let user_number: number = 0;

let handleInput: any = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    user_number = +event.target.value;
};

const Home: NextPage = () => {
    return (
        <div>
            <div>Jogo da adivinhação</div>
            <div>Qual o número sorteado?(entre 1 e 100)</div>
            <div>{user_number}Parabéns você acertou em {attemps} o número sorteado é {random_number}</div>
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
                            onChange={handleInput}
                        />

                    </div>
                </fieldset>
                <input type="button" value="Enviar" />
            </form>
        </div>
    )
}

export default Home
