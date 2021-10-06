import axios from "axios";

export const createMenu = async (
  data,
  id,
  setMessage,
  setSucess,
  setError
) => {
  const { cover_page } = data;
  const formData = new FormData();
  formData.append("price", data.price);
  formData.append("description", data.description);
  formData.append("menu", data.menu);
  formData.append("address", data.address);
  formData.append("name", data.name);
  formData.append("cover_page", cover_page, cover_page.name);

  await axios
  .post(`/api/create_menu/${id}`, formData)
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
