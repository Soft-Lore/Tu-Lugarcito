import React, { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/core/Autocomplete";
import Button from "@material-ui/core/Button";
import { IoMdSend } from "react-icons/io";
import { AiFillCheckCircle } from "react-icons/ai";
import { menuTypeOptions } from "../../utils/const/sitesFormOpcions";
import { Error, Spinner } from "../atoms/index";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { useGetData } from "../hook/index";
import { Card } from "../moleculs/index";

export default function FormMenu({
  site,
  handleInput,
  handleOptions,
  toggleImage,
  toggleSubmit,
}) {
  const { data: restaurant } = useGetData("/api/all_restaurant");
  const [id, setId] = useState(null);

  return (
    <>
      {restaurant ? (
        id ? (
          <div className="new-site">
            <div className="new-site__drapAndDrop">
              <input
                type="file"
                onChange={(e) => toggleImage(e, true)}
                className="new-site__file"
                accept="image/gif, image/jpeg, image/png, image/svg"
              />
              {site.cover_page ? (
                <div className="new-site__image new-site__image-check">
                  <AiFillCheckCircle />
                  <h4>Imagen cargada correctamente</h4>
                </div>
              ) : (
                <div className="new-site__image">
                  <BiAddToQueue />
                  <h4>Favor, seleccione su foto de portada</h4>
                </div>
              )}
            </div>
            <div className="new-site__control new-site__textfield">
              <TextField
                fullWidth
                onChange={(e) => handleInput(e)}
                name="name"
                label="Nombre platillo/bebida/postre"
                type="text"
              />
            </div>
            <Autocomplete
              onChange={handleOptions}
              className="new-site__control"
              disablePortal
              options={menuTypeOptions}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              renderInput={(params) => (
                <TextField {...params} label="Tipo de Menu" />
              )}
            />
            <div className="new-site__control new-site__textfield">
              <TextField
                onChange={(e) => handleInput(e)}
                name="address"
                multiline
                maxRows={4}
                fullWidth
                label="Dirección de la propiedad"
              />
            </div>
            <div className="new-site__control new-site__textfield">
              <FormControl fullWidth onChange={(e) => handleInput(e)}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Precio por mes
                </InputLabel>
                <OutlinedInput
                  name="price"
                  startAdornment={
                    <InputAdornment position="start">C$</InputAdornment>
                  }
                  label="Amount"
                />
              </FormControl>
            </div>
            <div className="new-site__control new-site__textfield">
              <TextField
                onChange={(e) => handleInput(e)}
                name="description"
                multiline
                maxRows={4}
                fullWidth
                label="Descripcion de la propiedad"
              />
            </div>
            {site.error && <Error error={site.error} />}
            <div className="new-site__send">
              <Button
                onClick={ () => toggleSubmit(id)}
                fullWidth
                color="secondary"
                variant="contained"
                endIcon={<IoMdSend />}
              >
                Publicar
              </Button>
            </div>
          </div>
        ) : (
          <main className="main-sites main-site__form">
              <h3 className="restaurant-site__title restaurant-site__menu">Favor, seleccione el sitio al cual quiere añadir este menu.</h3>
            <div className="main-cards">
                {restaurant.estate_result.rows.map((dt) => (
                <Card
                    img={dt.Photos_Menus[0].cover_page}
                    price={dt.name.substring(0, 15) + "..."}
                    location={dt.Time.start_day + dt.Time.last_day}
                    bathroom={dt.Time.start_time + "-" + dt.Time.last_time}
                    id={dt.id}
                    key={dt.id}
                    onClick={(e) => setId(dt.id)}
                    type="restaurant"
                />
                ))}
            </div>
          </main>
        )
      ) : (
        <Spinner />
      )}
    </>
  );
}
