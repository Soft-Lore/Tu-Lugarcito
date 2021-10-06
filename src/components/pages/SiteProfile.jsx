import React, { useContext, useState } from "react";
import { ContainerCards } from "../organisms/index";
import { IoMdAddCircle } from "react-icons/io";
import { data } from "../../data";
import { BsHouseFill } from "react-icons/bs";
import { useTabs, useSiteProfile } from "../hook/index";
import { Error } from "../atoms/index";
import { parseJwt } from "../functions/decryptToken";
import context from "../context/tokenContext";
import { userOptions } from "../../optionsSelect";
import { FormCreateSite, FormCreateRestaurant } from "../organisms/index";
import { OptionsCreate } from "../moleculs/index";

export default function SiteProfile() {
  const [message, setMessage] = useState("");
  const [sucess, setSucess] = useState("");
  const [error, setError] = useState("");
  const { token } = useContext(context);
  const jwt = token ? parseJwt(token) : undefined;
  const { tabs, toggleTab } = useTabs(1);
  const { site, handleInput, handleOptions, toggleImage, toggleSubmit } =
    useSiteProfile(jwt?.user?.id | jwt?.id, setMessage, setSucess, setError);
  const [create, setCreate] = useState(null);

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
        {create ? (
          create === "restaurant" ? (
            <FormCreateRestaurant
              site={site}
              handleInput={handleInput}
              handleOptions={handleOptions}
              toggleImage={toggleImage}
              toggleSubmit={toggleSubmit}
            />
          ) : (
            <FormCreateSite
              site={site}
              handleInput={handleInput}
              handleOptions={handleOptions}
              toggleImage={toggleImage}
              toggleSubmit={toggleSubmit}
            />
          )
        ) : (
          <OptionsCreate state={setCreate} />
        )}
      </div>
      <ContainerCards
        cls={tabs === 2 ? "main-sites" : "tabs-hidden"}
        type="estate-site"
        data={data}
        options={userOptions}
        rute={null}
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
