const Paginacion = (props) => {
  const getPaginas = () => {
    let resultado = [];
    for (let i = 0; i < props.total; i++) {
      resultado.push(
        <a
          onClick={() => {
            props.onChange(i + 1);
          }}
          className={props.pagina === i + 1 ? "active" : ""}
        >
          {i + 1}
        </a>
      );
    }
    return resultado;
  };
  return (
    <div className="topbar-filter">
      <div className="pagination2">
        <span>
          Página {props.pagina} de {props.total}:
        </span>

        {getPaginas()}
      </div>
    </div>
  );
};
export default Paginacion;
