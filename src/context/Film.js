import { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

const FilmContext = createContext();
function Provider({ children }) {
  const [id, setId] = useState("");
  const [filmIsmi, setFilmIsmi] = useState("");
  const [filmId, setFilmId] = useState("");
  const [vizyonTarihi, setVizyonTarihi] = useState("");
  const [filmTuru, setFilmTuru] = useState("");
  const [hIciFiyat, setHIciFiyat] = useState("");
  const [hSonuFiyat, setHSonuFiyat] = useState("");
  const [films, setFilms] = useState([]);

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axios.get("https://localhost:7088/api/Film/GetFilm");
    setFilms(result.data);
    console.log(result.data);
  }

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("https://localhost:7088/api/Film/AddFilm", {
        vizyonTarihi: vizyonTarihi,
        filmTuru: filmTuru,
        filmIsmi: filmIsmi,
        hIciFiyat: hIciFiyat,
        hSonuFiyat: hSonuFiyat,
      });
      alert("Film Registation Successfully");

      setId("");
      setFilmId("");
      setVizyonTarihi("");
      setFilmTuru("");
      setFilmIsmi("");
      setHIciFiyat("");
      setHSonuFiyat("");

      Load();
    } catch (err) {
      alert(err);
    }
  }

  async function editFilm(films) {
    setFilmId(films.filmId);
    setVizyonTarihi(films.vizyonTarihi);
    setFilmTuru(films.filmTuru);
    setFilmIsmi(films.filmIsmi);
    setHIciFiyat(films.hIciFiyat);
    setHSonuFiyat(films.hSonuFiyat);
    setId(films.id);
  }

  async function deleteFilm(id) {
    await axios.delete("https://localhost:7088/api/Film/DeleteFilm/" + id);
    alert("Employee deleted Successfully");
    setId("");
    setFilmId("");
    setVizyonTarihi("");
    setFilmTuru("");
    setFilmIsmi("");
    setHIciFiyat("");
    setHSonuFiyat("");
    Load();
  }

  async function update(event) {
    event.preventDefault();
    try {
      await axios.patch(
        "https://localhost:7088/api/Film/UpdateFilm/" +
          films.find((u) => u.id === id).id || id,
        {
          id: id,
          filmId: filmId,
          vizyonTarihi: vizyonTarihi,
          filmTuru: filmTuru,
          filmIsmi: filmIsmi,
          hIciFiyat: hIciFiyat,
          hSonuFiyat: hSonuFiyat,
        }
      );
      alert("Registation Updateddddd");
      setId("");
      setFilmId("");
      setVizyonTarihi("");
      setFilmTuru("");
      setFilmIsmi("");
      setHIciFiyat("");
      setHSonuFiyat("");
      Load();
    } catch (err) {
      alert(err);
    }
  }

  const sharedValuesAndMethods = {
    films,
    Load,
    save,
    editFilm,
    deleteFilm,
    update,
    filmId,vizyonTarihi,filmTuru ,filmIsmi, hIciFiyat ,hSonuFiyat ,
    id,setId, setFilmIsmi,setFilmId,setVizyonTarihi,setFilmTuru,setHIciFiyat,setHSonuFiyat,
  };
  return (
    <FilmContext.Provider value={sharedValuesAndMethods}>
      {children}
    </FilmContext.Provider>
  );
}

export { Provider };
export default FilmContext;
