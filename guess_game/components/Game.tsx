import React, {useState} from 'react'
export default function Game({boolShowTip, user_number, attempts, random_number, result, setUserNumber, setBoolShowTip}) {


    return (
        <div>
            <div className="tip">{boolShowTip && (result < 0 ? <div> O número sorteado é maior</div> : <div>O número sorteado é menor</div>)}</div>
            <form id="app-guess" >
                <fieldset>
                    <legend>Informe um número</legend>
                    <div className="input-fieldset">
                        <label htmlFor="user-number" className="label-number">Número chutado: </label>
                        <input
                            name="user-number"
                            type="number"
                            placeholder="Seu número chutado é"
                            required
                            autoFocus
                            onChange={event => {
                                setUserNumber(event.target.value);
                                setBoolShowTip(false);
                            }}
                        />

                    </div>
                </fieldset>
            </form>
            <div className="info">Qual o número sorteado?(entre 1 e 100)</div>
        </div>
    )

}
