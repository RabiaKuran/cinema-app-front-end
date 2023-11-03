import axios from "axios";
import Card from "@mui/material/Card";
import FilmList from "./FilmList";
import { useContext } from "react";
import FilmContext from "../context/Film";
function FilmCrud() {
  const { filmId,vizyonTarihi,filmTuru ,filmIsmi, hIciFiyat ,hSonuFiyat , films, Load,id,setId, setFilmIsmi,setFilmId,setVizyonTarihi,setFilmTuru,setHIciFiyat,setHSonuFiyat, save, editFilm, deleteFilm, update } =
    useContext(FilmContext);

  return (
    <div>
      <Card style={{ margin: "20px" }}>
        <h2 style={{ padding: "10px", color: "red" }}>Film Details</h2>
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
              <button
                class="btn btn-primary mt-4"
                onClick={save}
                style={{ marginRight: "8px" }}
              >
                KAYDET
              </button>
              <button class="btn btn-warning mt-4" onClick={update}>
                GÜNCELLE
              </button>
            </div>
          </form>
        </div>
        <br></br>

        <FilmList films={films} editFilm={editFilm} deleteFilm={deleteFilm} />
      </Card>
    </div>
  );
}

export default FilmCrud;
