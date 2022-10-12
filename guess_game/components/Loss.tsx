
export default function Loss({reset}) {
    return (
        <div>
            Você perdeu, lamento
            <input type="button" value="Reiniciar" onClick={() => reset()} />
        </div>
    );
};
