import React from "react";
import { BiAddToQueue } from "react-icons/bi";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/core/Autocomplete";
import Button from "@material-ui/core/Button";
import { IoMdSend } from "react-icons/io";
import { AiFillCheckCircle } from "react-icons/ai";
import {
  optionDaysOpen,
  optionDaysClose
} from "../../utils/const/sitesFormOpcions";
import { Error } from "../atoms/index";

export default function FormCreateRestaurant({
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
      <div className="new-site__control new-site__textfield">
        <TextField
          fullWidth
          onChange={(e) => handleInput(e)}
          name="name"
          label="Nombre local"
          type="text"
        />
      </div>
      <div className="new-site__control new-site__textfield">
       <TextField
          fullWidth
          onChange={(e) => handleInput(e)}
          name="hourOpen"
          label="Hora Apertura"
          type="time"
          defaultValue="12:20"
        />
      </div>
      <div className="new-site__control new-site__textfield">
        <TextField
          fullWidth
          onChange={(e) => handleInput(e)}
          name="hourClose"
          label="Hora Cierre"
          type="time"
          defaultValue="18:20"
        />
      </div>
      <Autocomplete
        onChange={handleOptions}
        className="new-site__control"
        disablePortal
        options={optionDaysOpen}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        renderInput={(params) => (
          <TextField {...params} label="Día empieza labor" />
        )}
      />
      <Autocomplete
        onChange={handleOptions}
        className="new-site__control"
        disablePortal
        options={optionDaysClose}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        renderInput={(params) => (
          <TextField {...params} label="Día finaliza labor" />
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
