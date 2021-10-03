import React, { useContext, useState } from "react";
import { ContainerCards } from "../organisms/index";
import { BiAddToQueue } from "react-icons/bi";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/core/Autocomplete";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import { IoMdSend, IoMdAddCircle } from "react-icons/io";
import { data } from "../../data";
import { BsHouseFill } from "react-icons/bs";
import { useTabs, useSiteProfile } from "../hook/index";
import { AiFillCheckCircle } from "react-icons/ai";
import { Error } from "../atoms/index";
import { parseJwt } from "../functions/decryptToken";
import context from "../context/tokenContext";
import {
  options,
  optionsPlayground,
  optionsGarage,
  optionsAlquiler,
} from "../../utils/const/sitesFormOpcions";
import { userOptions } from '../../optionsSelect'

export default function SiteProfile() {
  const [message, setMessage] = useState("");
  const [sucess, setSucess] = useState("");
  const [error, setError] = useState("");
  const { token } = useContext(context);
  const jwt = token ? parseJwt(token) : undefined;
  const { tabs, toggleTab } = useTabs(1);
  const { site, handleInput, handleOptions, toggleImage, toggleSubmit } =
    useSiteProfile(jwt?.user?.id | jwt?.id, setMessage, setSucess, setError);

  return (
    <>
      <nav className="tabs">
        <ul className="tabs-list">
          <li
            onClick={() => toggleTab(1)}
            className={
              tabs === 1
                ? "tabs-list__item tabs-list__item-active"
                : "tabs-list__item"
            }
          >
            <span>Crear Nuevo</span>
            <IoMdAddCircle />
          </li>
          <li
            onClick={() => toggleTab(2)}
            className={
              tabs === 2
                ? "tabs-list__item tabs-list__item-active"
                : "tabs-list__item"
            }
          >
            <span>Mis Sitios</span>
            <BsHouseFill />
          </li>
        </ul>
      </nav>
      <div className={tabs === 1 ? "siteProfile" : "tabs-hidden"}>
        <div className="new-site">
          <h2 className="new-site__title">Nueva propiedad</h2>
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
                  Usted ha subido {site.images.length} imagenes. <br /> Debe
                  subir minimo como 5 imagenes y como maximo 10
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
      </div>
      <ContainerCards
        cls={tabs === 2 ? "main-sites" : "tabs-hidden"}
        type="estate-site"
        data={data}
        options={userOptions}
      />
      {message && (
        <Error
          cls="error-secondary success-message__profile-loading"
          setError={setMessage}
          error={message}
        />
      )}
      {sucess && (
        <Error
          cls="error-secondary success-message__profile"
          setError={setSucess}
          error={sucess}
        />
      )}
      {error && (
        <Error cls="error-secondary" setError={setError} error={error} />
      )}
    </>
  );
}
