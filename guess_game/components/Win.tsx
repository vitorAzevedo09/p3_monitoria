export default function Win({reset, attempts}) {
    return (
        <div>
            Você venceu com {attempts} tentativa{attempts > 1 && <span>s</span>} <br />
            <input type="button" className="button" value="Reiniciar" onClick={() => reset()} />
        </div>
    );
};
