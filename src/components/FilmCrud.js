import axios from "axios";
import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import FilmList from "./FilmList";

function FilmCrud() {
  const [id, setId] = useState("");
  const [filmId, setFilmId] = useState("");
  const [vizyonTarihi, setVizyonTarihi] = useState("");
  const [filmTuru, setFilmTuru] = useState("");
  const [filmIsmi, setFilmIsmi] = useState("");
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

  return (
    <div>
      <Card style={{margin:"20px"}}>
      <h2 style={{padding:"10px", color: "red"}}>Film Details</h2>
      <div class="container mt-4">
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="id"
              hidden
              value={id}
              onChange={(event) => {
                setId(event.target.value);
              }}
            />

            <div class="form-group">
              <label>Vizyon Tarihi</label>
              <input
                type="text"
                class="form-control"
                id="vizyonTarihi"
                value={vizyonTarihi}
                onChange={(event) => {
                  setVizyonTarihi(event.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label>Film Turu</label>
              <input
                type="text"
                class="form-control"
                id="filmTuru"
                value={filmTuru}
                onChange={(event) => {
                  setFilmTuru(event.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label>Film Ismi</label>
              <input
                type="text"
                class="form-control"
                id="filmIsmi"
                value={filmIsmi}
                onChange={(event) => {
                  setFilmIsmi(event.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label>Hafta İçi Fiyat</label>
              <input
                type="text"
                class="form-control"
                id="hIciFiyat"
                value={hIciFiyat}
                onChange={(event) => {
                  setHIciFiyat(event.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label>Hafta Sonu Fiyat</label>
              <input
                type="text"
                class="form-control"
                id="hSonuFiyat"
                value={hSonuFiyat}
                onChange={(event) => {
                  setHSonuFiyat(event.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <button class="btn btn-primary mt-4" onClick={save} style={{marginRight:"8px"}}>
              KAYDET
            </button>
            <button class="btn btn-warning mt-4" onClick={update}>
              GÜNCELLE
            </button>
          </div>
        </form>
      </div>
      <br></br>

      <FilmList films={films} editFilm={editFilm} deleteFilm={deleteFilm}/>
      </Card>
    </div>
  );
}

export default FilmCrud;
