
const { Estate, Home_Type, Business_Type, Photos, Role, User } = require("../../database/db");
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
            id_user: id_user,
            id_home: type_home.id,
            id_business: type_business.id
        });

        const result_cover_page = await cloudinary.v2.uploader.upload(cover_page);
        await Photos.create({ cover_page: result_cover_page.url, estate_id: estate.id });

        for (let i = 0; i < gallery.length; i++) {
            result_gallery = await cloudinary.v2.uploader.upload(gallery[i].path);
            await Photos.create({ images: result_gallery.url, estate_id: estate.id });
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