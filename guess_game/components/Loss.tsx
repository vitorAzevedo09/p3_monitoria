
export default function Loss({reset}) {
    return (
        <div>
            Você perdeu, lamento<br />
            <input type="button" className="button" value="Reiniciar" onClick={() => reset()} />
        </div>
    );
};
