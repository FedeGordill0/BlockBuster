const Pelicula = (props) => {
  return (
    <div className="movie-item-style-2">
      <img src={props.img} alt="" />
      <div className="mv-item-infor">
        <h6>
          <a href="moviesingle_light.html">
            <span>{props.titulo}</span>
          </a>
        </h6>
        <p className="rate">
          <i className="ion-android-star"></i>

          <span>{props.calificacion}</span>
        </p>
        <p className="describe">{props.children}</p>
        <p className="run-time">
          {" "}
          Duración: {props.duracion}
          <br />
          Fecha: {props.fecha}
        </p>
        <p>
          Director: <a href="#">{props.director}</a>
        </p>
        <p>
          Reparto: <a href="#">{props.actores}</a>
        </p>
      </div>
    </div>
  );
};
export default Pelicula;
