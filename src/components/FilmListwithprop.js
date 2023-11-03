import React from 'react'
import Card from '@mui/material/Card';

function FilmList({films,editFilm,deleteFilm}) {
  return (
    <div>
        <Card>
        <table class="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Film Id</th>
            <th scope="col">Vizyon Tarihi</th>
            <th scope="col">Film Türü</th>
            <th scope="col">Film İsmi</th>
            <th scope="col">H.İçi Fiyat</th>
            <th scope="col">H.Sonu Fiyat</th>
          </tr>
        </thead>
        {films?.map(function fn(Film) {
          return (
            <tbody>
              <tr>
                <th >{Film.id} </th>
                <td>{Film.filmId}</td>
                <td>{Film.vizyonTarihi}</td>
                <td>{Film.filmTuru}</td>
                <td>{Film.filmIsmi}</td>
                <td>{Film.hIciFiyat}</td>
                <td>{Film.hSonuFiyat}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick={() => editFilm(Film)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => deleteFilm(Film.filmId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      </Card> 
        </div>
  )
}

export default FilmList