const Estate = require('../../database/models/Estate');
const Home_Type = require('../../database/models/Home_type');
const Business_Type = require('../../database/models/Business_Type');
const Photo = require('../../database/models/Photo');
// const { Estate, Home_Type, Business_Type, Photo } = require("../../models/index");
const cloudinary = require("cloudinary");
const fs = require("fs-extra");

cloudinary.config({
    cloud_name: "soft-lore",
    api_key: "467327594815751",
    api_secret: "Hn-KaLv3QmQUdKE2JRlUbh3Xw0c"
})

exports.Create_rent = async (req, res) => {

    /** image fields */
    const cover_page = req.files['cover_page'][0].path;
    const gallery = req.files['gallery'];

    let id_user = req.params.id;
    id_user = Number(id_user);
    let body = req.body;

    /** variable where we store the data that cloudinary sends us*/
    let result_gallery;

    try {

        let type_home = (await Home_Type.findOne({ where: { type_of_rental: body.type_of_rental } }) || await Home_Type.create({ type_of_rental: body.type_of_rental }))
        let type_business = (await Business_Type.findOne({ where: { type_offer: body.offer } }) || await Business_Type.create({ type_offer: body.offer }));

        const estate = await Estate.create({
            price: body.price,
            bedrooms: body.bedrooms,
            bathrooms: body.bathrooms,
            backyar: body.backyar,
            garage: body.garage,
            address: body.address,
            description: body.description,
            HomeTypeId: type_home.id,
            BusinessTypeId: type_business.id,
            UserId: id_user,
        });

        const result_cover_page = await cloudinary.v2.uploader.upload(cover_page);
        await Photo.create({ cover_page: result_cover_page.url, EstateId: estate.id });

        for (let i = 0; i < gallery.length; i++) {
            result_gallery = await cloudinary.v2.uploader.upload(gallery[i].path);
            await Photo.create({ images: result_gallery.url, EstateId: estate.id });
            fs.unlinkSync(gallery[i].path);
        }
        fs.unlinkSync(req.files['cover_page'][0].path);

        res.status(201).json({
            ok: true,
            message: "Sitio publicado exelentemente",
            estate,
        })


    } catch (error) {
        res.status(500).json({
            ok: false,
            error
        })
    }

}