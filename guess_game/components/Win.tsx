export default function Win({reset, attempts}) {
    return (
        <div>
            Você venceu com {attempts} tentativa {attempts > 1 && <span>s</span>}
            <input type="button" value="Reiniciar" onClick={() => reset()} />
        </div>
    );
};
