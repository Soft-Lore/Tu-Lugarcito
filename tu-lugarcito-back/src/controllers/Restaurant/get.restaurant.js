const Restaurant = require('../../database/models/Restaurant')
const Photo_Menu = require('../../database/models/Photo_Menu')
const Time = require('../../database/models/Time')
const Menu = require('../../database/models/Menu')
const Menu_Type = require('../../database/models/Menu_Type')

exports.all_restaurant = async (req, res) => {
    let limit = req.query.limit || 10;
    let offset = req.query.offset || 0;

    limit = Number(limit);
    offset = Number(offset);

    try {
        const estate_result = await Restaurant.findAndCountAll({

            attributes: ['id', 'name', 'address'],
            limit: limit,
            offset: offset,

            include: [
                {
                    model: Time,
                    attributes: ['start_day', 'last_day', 'start_time', 'last_time']
                },
                {
                    model: Photo_Menu,
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

exports.get_one_restaurant = async (req, res) => {
    const idRestaurant = req.params.id;

    try {
        const estate_result = await Restaurant.findOne({
            where: {
                id: idRestaurant
            },
            attributes: ['id', 'name', 'address'],

            include: [
                {
                    model: Time,
                    attributes: ['start_day', 'last_day', 'start_time', 'last_time']
                },
                {
                    model: Photo_Menu,
                    attributes: ['cover_page', 'images']
                },
                {
                    model: Menu,
                    attributes: ['photo', 'name', 'price', 'description', 'available', 'id'],

                    include: [
                       {
                        model: Menu_Type,
                        attributes: ['menu_type', 'id']
                       }  
                    ]
                }
            ]
        })


        return res.status(200).json({
            ok: true,
            name: estate_result.name,
            hourOpen: estate_result.Time.start_time,
            hourClose: estate_result.Time.last_time,
            dayOpen: estate_result.Time.start_day,
            dayClose: estate_result.Time.last_day,
            address: estate_result.address,
            coverPage: estate_result.Photos_Menus[0].cover_page,
            images: [...estate_result.Photos_Menus.map((m, i) => m.images)],
            Menus: estate_result.Menus
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            error
        });
    }

}