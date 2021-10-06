const Menu = require("../../database/models/Menu");
const Menu_Type = require("../../database/models/Menu_Type");
const Restaurant = require("../../database/models/Restaurant")

const cloudinary = require("cloudinary");
const fs = require("fs-extra");

cloudinary.config({
  cloud_name: "soft-lore",
  api_key: "467327594815751",
  api_secret: "Hn-KaLv3QmQUdKE2JRlUbh3Xw0c",
});

exports.create_menu = async (req, res) => {
  const cover_page = req.files["cover_page"][0].path;
  const id_restaurant = req.params.id;
  const { name, address, price, description } = req.body;

  if (!id_restaurant) {
    res.status(404).json({
      ok: false,
      message: "Se require id del restaurante",
    });
  }

  const id_restaurant_db = await Restaurant.findOne({ where: { id: id_restaurant } });

  if (!id_restaurant_db) {
    res.status(404).json({
      ok: false,
      message: "Este restaurante no se encuentra registrado",
    });
  }

  
  try {
    const menuType = (await Menu_Type.findOne({ where: { menu_type: req.body.menu } }) || await Menu_Type.create({ menu_type: req.body.menu }))
    const result_photo = await cloudinary.v2.uploader.upload(cover_page);

    const menuCreate = await Menu.create({
      name,
      address,
      price,
      description,
      RestaurantId: id_restaurant_db.id,
      MenusTypeId: menuType.id,
      photo: result_photo.url
    });

    res.status(201).json({
      ok: true,
      message: "Menu Registrado exitosamente",
      menu: menuCreate
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Ah sucedido un error grave",
    });
  }
};
