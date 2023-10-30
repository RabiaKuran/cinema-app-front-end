import React from "react";
import Grid from '@mui/material/Grid';
import FilmCrud from "../components/FilmCrud";
import FilmList from "../components/FilmList";

export default function Cinema() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <FilmCrud/>
      </Grid>
      <Grid item xs={7}>
      <FilmList/>
      </Grid>
      
    </Grid>
  );
}
