const Role = require('../../database/models/Role');
const User = require('../../database/models/User');
const Home_Type = require("../../database/models/Home_type");
const Business_Type = require('../../database/models/Business_Type');
const Photo = require("../../database/models/Photo");
const Estate = require('../../database/models/Estate');


exports.all_estates = async (req, res) => {
    let condition;
    let limit = req.query.limit || 5;
    let offset = req.query.offset || 0;

    limit = Number(limit);
    offset = Number(offset);

    try {
        const estate_result = await Estate.findAndCountAll({

            attributes: ['price', 'bedrooms', 'bathrooms', 'backyar', 'garage', 'sold', 'address'],
            limit: limit,
            offset: offset,

            include: [
                {
                    model: Home_Type,
                    attributes: ['type_of_rental']
                },
                {
                    model: Business_Type,
                    attributes: ['type_offer']
                },
                {
                    model: Photo,
                    attributes: ['cover_page'],
                    limit: 1
                }
            ]
        })


        return res.status(200).json({
            ok: true,
            estate_result
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            error
        });
    }

}

exports.get_one_estate_user = async (req, res) => {

    const id_user = req.params.id

    try {
        const user_all_estates = await Estate.findOne({
            where: {
                id: id_user
            },

            attributes: ['price', 'bedrooms', 'bathrooms', 'backyar', 'garage', 'sold', 'address', 'description'],

            include: [
                {
                    model: Home_Type,
                    attributes: ['type_of_rental']
                },
                {
                    model: Business_Type,
                    attributes: ['type_offer']
                },
                {
                    model: Photo,
                    attributes: ['cover_page', 'images'],
                }
            ]
        })

        return res.status(200).json({
            ok: true,
            user_all_estates
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            error
        });
    }

}