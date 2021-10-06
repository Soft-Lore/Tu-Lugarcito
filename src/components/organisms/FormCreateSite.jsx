import React from "react";
import { BiAddToQueue } from "react-icons/bi";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/core/Autocomplete";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import { IoMdSend } from "react-icons/io";
import { AiFillCheckCircle } from "react-icons/ai";
import {
  options,
  optionsPlayground,
  optionsGarage,
  optionsAlquiler,
} from "../../utils/const/sitesFormOpcions";
import { Error } from "../atoms/index";

export default function FormCreateSite({
  site,
  handleInput,
  handleOptions,
  toggleImage,
  toggleSubmit,
}) {
  return (
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
      <div className="new-site__drapAndDrop">
        <input
          type="file"
          onChange={(e) => toggleImage(e)}
          className="new-site__file"
          accept="image/gif, image/jpeg, image/png, image/svg"
        />
        {site.images && site.images.length > 0 ? (
          <div
            className={
              site.images.length >= 5
                ? "new-site__image new-site__image-check"
                : "new-site__image"
            }
          >
            {site.images.map((m, index) => (
              <span className="new-site__span" key={index}>
                <AiFillCheckCircle />
              </span>
            ))}
            <h4>
              Usted ha subido {site.images.length} imagenes. <br /> Debe subir
              minimo como 5 imagenes y como maximo 10
            </h4>
          </div>
        ) : (
          <div className="new-site__image">
            <BiAddToQueue />
            <h4>Agregar fotos</h4>
            <span>O arrastrla y sueltalas</span>
          </div>
        )}
      </div>
      <Autocomplete
        onChange={handleOptions}
        className="new-site__control"
        disablePortal
        options={options}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        renderInput={(params) => (
          <TextField {...params} label="Propiedad en venta o alquiler" />
        )}
      />
      <Autocomplete
        onChange={handleOptions}
        className="new-site__control"
        disablePortal
        options={optionsPlayground}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        renderInput={(params) => <TextField {...params} label="Patio" />}
      />
      <Autocomplete
        onChange={handleOptions}
        disablePortal
        className="new-site__control"
        options={optionsAlquiler}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        renderInput={(params) => (
          <TextField {...params} label="Tipo de alquiler" />
        )}
      />
      <div className="new-site__control new-site__textfield">
        <TextField
          fullWidth
          onChange={(e) => handleInput(e)}
          name="bedrooms"
          label="Numero de habitaciones"
          type="number"
        />
      </div>
      <Autocomplete
        onChange={handleOptions}
        className="new-site__control"
        disablePortal
        options={optionsGarage}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        renderInput={(params) => <TextField {...params} label="Garage" />}
      />
      <div className="new-site__control new-site__textfield">
        <TextField
          onChange={(e) => handleInput(e)}
          name="bathrooms"
          fullWidth
          label="Numero de baños"
          type="number"
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
          name="address"
          multiline
          maxRows={4}
          fullWidth
          label="Dirección de la propiedad"
        />
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
          onClick={toggleSubmit}
          fullWidth
          color="secondary"
          variant="contained"
          endIcon={<IoMdSend />}
        >
          Publicar
        </Button>
      </div>
    </div>
  );
}
