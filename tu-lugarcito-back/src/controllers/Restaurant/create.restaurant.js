const Restaurant = require("../../database/models/Restaurant");
const Time = require("../../database/models/Time");
const User = require("../../database/models/User");
const Photos_Menu = require("../../database/models/Photo_Menu");

const cloudinary = require("cloudinary");
const fs = require("fs-extra");

cloudinary.config({
  cloud_name: "soft-lore",
  api_key: "467327594815751",
  api_secret: "Hn-KaLv3QmQUdKE2JRlUbh3Xw0c",
});

exports.create_restaurant = async (req, res) => {
  const cover_page = req.files["cover_page"][0].path;
  const gallery = req.files["gallery"];

  const id_user = req.params.id;
  const { name, address, start_day, last_day, start_time, last_time } = req.body;

  if (!id_user) {
    res.status(404).json({
      ok: false,
      message: "Se require id del usuario",
    });
  }

  const id_user_db = await User.findOne({ where: { id: id_user } });

  if (!id_user_db) {
    res.status(404).json({
      ok: false,
      message: "Este usuario no se encuentra registrado",
    });
  }

  try {

    
    const time = await Time.create({
      start_day: start_day,
      last_day: last_day,
      start_time: start_time,
      last_time: last_time,
    });

    const restaurant = await Restaurant.create({
      name: name,
      address: address,
      UserId: id_user_db.id,
      TimeId: time.id,
    });

    const result_cover_page = await cloudinary.v2.uploader.upload(cover_page);
    await Photos_Menu.create({ cover_page: result_cover_page.url, RestaurantId: restaurant.id });

    for (let i = 0; i < gallery.length; i++) {
        result_gallery = await cloudinary.v2.uploader.upload(gallery[i].path);
        await Photos_Menu.create({ images: result_gallery.url, RestaurantId: restaurant.id });
        fs.unlinkSync(gallery[i].path);
    }
    fs.unlinkSync(req.files['cover_page'][0].path);




    res.status(201).json({
      ok: true,
      message: "Restaurante Registrado exitosamente",
      restaurant,
      time,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Ah sucedido un error grave",
    });
  }
};
