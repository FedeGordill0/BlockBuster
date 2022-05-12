import Pelicula from "./pelicula";
import PageWrapper from "./PageWrapper";
import Paginacion from "./Paginacion";
import { useEffect, useState } from "react";

function ListadoPeliculas() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    buscarPelicula();
  }, []);

  const buscarPelicula = async () => {
    //Link que permite cargar las películas de la BD
    let url =
      "https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/lucasmoy-dev/Curso-de-React/main/Proyecto%202%20-%20Web%20de%20Peliculas/Proyecto%20Terminado/src/peliculas.json";

    let respuesta = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "https://raw.githubusercontent.com/",
      },
    });

    let json = await respuesta.json();
    setPeliculas(json);
  };

  buscarPelicula();

  const getTotalPaginas = () => {
    let cantidadTotal = peliculas.length;
    return Math.ceil(cantidadTotal / 4);
  };

  let peliculasPorPagina = peliculas.slice(
    (paginaActual - 1) * 4,
    paginaActual * 4
  );
  return (
    <PageWrapper>
      {peliculasPorPagina.map((pelicula) => (
        <Pelicula
          titulo={pelicula.titulo}
          calificacion={pelicula.calificacion}
          director={pelicula.director}
          actores={pelicula.actores}
          fecha={pelicula.fecha}
          duracion={pelicula.duracion}
          img={pelicula.img}
        >
          {pelicula.descripcion}
        </Pelicula>
      ))}

      <Paginacion
        pagina={paginaActual}
        total={getTotalPaginas()}
        onChange={(pagina) => {
          setPaginaActual(pagina);
        }}
      />
    </PageWrapper>
  );
}

export default ListadoPeliculas;
