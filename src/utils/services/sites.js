import axios from "axios";

export const createSite = async (data, id, setMessage, setSucess, setError) => {
  const { cover_page, images } = data;
  const formData = new FormData();
  formData.append("price", data.price);
  formData.append("bedrooms", data.bedrooms);
  formData.append("bathrooms", data.bathrooms);
  formData.append("backyar", data.backyar === "Sí" ? true : false);
  formData.append("garage", data.garage === "Sí" ? true : false);
  formData.append("address", data.address);
  formData.append("description", data.description);
  formData.append("type_of_rental", data.type_of_rental);
  formData.append("offer", data.offer);
  formData.append("cover_page", cover_page, cover_page.name);

  images.map((img) => formData.append("gallery", img, img.name));

  await axios
    .post(`/api/create_business/${id}`, formData)
    .then((response) => response.data)
    .then((resp) => {
      if (resp.ok) {
        setMessage("");
        setSucess("Sitio creado correctamente....");
      } else {
        setError("Ha ocurrido un error....");
      }

      setTimeout(() => {
        setError("");
        setMessage("");
        setSucess("");
      }, 4000);
    })
    .catch((error) => console.log(error));
};
