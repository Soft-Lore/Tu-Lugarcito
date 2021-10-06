import { useState } from "react";
import { createSite } from "../../utils/services/sites";
import { createRestaurant } from "../../utils/services/restaurant";
import { createMenu } from "../../utils/services/menu";

export default function useSiteProfile(id, setMessage, setSucess, setError) {
  const [site, setSite] = useState({
    cover_page: null,
    images: [],
    type_of_rental: "",
    backyar: "",
    offer: "",
    bedrooms: null,
    garage: null,
    bathrooms: null,
    price: null,
    address: "",
    description: "",
    error: "",
    name: "",
    hourOpen: "",
    hourClose: "",
    dayOpen: "",
    dayClose: ""
  });

  function handleInput(e) {
    setSite({
      ...site,
      [e.target.name]: e.target.value,
    });
  }

  function toggleImage(e, secondary) {
    if (e.target.files && e.target.files.length > 0) {
      if (secondary) {
        setSite({
          ...site,
          cover_page: e.target.files[0],
        });
      } else {
        setSite({
          ...site,
          images: [...site.images, e.target.files[0]],
        });
      }
    }
  }
  function handleOptions(event, value) {
    setSite({
      ...site,
      [value.name]: value.label,
    });
  }

  function toggleSubmit() {
    validateFields();
  }

  function validateFields() {
    if (!site.cover_page) {
      setSite({
        ...site,
        error: "Favor, seleccione una imagen de portada",
      });
    } else if (!site.images || site.images.length < 5) {
      setSite({
        ...site,
        error: "Favor, seleccione como minimo 5 imagenes",
      });
    } else if (!site.offer) {
      setSite({
        ...site,
        error: "Seleccione el tipo la propiedad si en venta o alquiler",
      });
    } else if (!site.backyar) {
      setSite({
        ...site,
        error: "Seleccione si tiene o no un patio",
      });
    } else if (!site.type_of_rental) {
      setSite({
        ...site,
        error: "Seleccione el tipo de renta",
      });
    } else if (!site.bedrooms) {
      setSite({
        ...site,
        error: "Ingrese el numero de habitaciones",
      });
    } else if (!site.garage) {
      setSite({
        ...site,
        error: "Seleccione si tiene o no un garage",
      });
    } else if (!site.bathrooms) {
      setSite({
        ...site,
        error: "Ingrese el numero de baños",
      });
    } else if (!site.price) {
      setSite({
        ...site,
        error: "Favor ingrese el precio de la propiedad",
      });
    } else if (!site.description || !site.address) {
      setSite({
        ...site,
        error: "La dirección y la descripcion de la propiedad son requeridas",
      });
    } else {
      setSite({
        ...site,
        error: null,
      });
      setMessage("Cargando, Favor espere un momento...");
      createSite(site, id, setMessage, setSucess, setError);
    }
  }

  const toggleCreateRestaurant = () => {
    if (!site.cover_page) {
      setSite({
        ...site,
        error: "Favor, seleccione una imagen de portada",
      });
    } else if (!site.images || site.images.length < 5) {
      setSite({
        ...site,
        error: "Favor, seleccione como minimo 5 imagenes",
      });
    } else if (!site.name) {
      setSite({
        ...site,
        error: "Seleccione un nombre para el restaurante",
      });
    } else if (!site.hourOpen) {
      setSite({
        ...site,
        error: "Seleccione hora de apertura del sitio",
      });
    } else if (!site.hourClose) {
      setSite({
        ...site,
        error: "Seleccione hora de cierre del sitio",
      });
    } else if (!site.dayOpen) {
      setSite({
        ...site,
        error: "Favor, seleccióne el primer día de la semana que abre el negocio",
      });
    } else if (!site.dayClose) {
      setSite({
        ...site,
        error: "Favor, seleccióne el ultimo día de la semana que abre el negocio",
      });
    } else if (!site.address) {
      setSite({
        ...site,
        error: "La dirección del sitio es requeridas",
      });
    } else {
      setSite({
        ...site,
        error: null,
      });
      setMessage("Cargando, Favor espere un momento...");
      createRestaurant(site, id, setMessage, setSucess, setError);
    }
  }

  const toggleCreateMenu = () => {
    if (!site.cover_page) {
      setSite({
        ...site,
        error: "Favor, seleccione una imagen de portada",
      });
    } else if (!site.name) {
      setSite({
        ...site,
        error: "Seleccione un nombre para su platillo",
      });
    } else if (!site.menu) {
      setSite({
        ...site,
        error: "Seleccione un tipo de menu (bebida, Comida, Postre)",
      });
    } else if (!site.address) {
      setSite({
        ...site,
        error: "La dirección del sitio es requeridas",
      });
    } else if (!site.price) {
      setSite({
        ...site,
        error: "Favor, asigne un precio a su menu",
      });
    } else if (!site.description) {
      setSite({
        ...site,
        error: "Seleccione una description para su menu",
      });
    } else {
      setSite({
        ...site,
        error: null,
      });
      
      setMessage("Cargando, Favor espere un momento...");
      createMenu(site, id, setMessage, setSucess, setError);
    }
  }

  return {
    site,
    handleInput,
    handleOptions,
    toggleImage,
    toggleSubmit,
    toggleCreateRestaurant,
    toggleCreateMenu
  };
}
