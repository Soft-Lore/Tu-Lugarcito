import axios from "axios";

export const createRestaurant = async (
  data,
  id,
  setMessage,
  setSucess,
  setError
) => {
  const { cover_page, images } = data;
  const formData = new FormData();
  formData.append("address", data.address);
  formData.append("dayClose", data.dayClose);
  formData.append("dayOpen", data.dayOpen);
  formData.append("hourClose", data.hourClose);
  formData.append("hourOpen", data.hourOpen);
  formData.append("name", data.name);
  formData.append("cover_page", cover_page, cover_page.name);

  images.map((img) => formData.append("gallery", img, img.name));

  await axios
  .post(`/api/new_restaurant/${id}`, formData)
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

    window.location.replace("/");
  })
  .catch((error) => console.log(error));
};
