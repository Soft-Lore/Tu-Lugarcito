const Role = require('./models/Role');
const User = require('./models/User');
const Home_Type = require("./models/Home_type");
const Business_Type = require('./models/Business_Type');
const Photo = require("./models/Photo");
const Estate = require('./models/Estate');
const Menu = require('./models/Menu');
const Restaurant = require('./models/Restaurant');
const Time = require('./models/Time');
const Menu_Type = require("./models/Menu_Type");
const Photo_Menu = require("./models/Photo_Menu");


/**Usuario a Roles */
User.belongsTo(Role);
Role.hasMany(User);

//**Usuario a Inmuebles*/
Estate.belongsTo(User);
User.hasMany(Estate);

/**Usuario a Restaurante */
Restaurant.belongsTo(User);
User.hasMany(Restaurant);

/**Inmueble a Tipo de casa */
Estate.belongsTo(Home_Type);
Home_Type.hasMany(Estate);

/**Inmueble a Tipo de negocio */
Estate.belongsTo(Business_Type);
Business_Type.hasMany(Estate);

/**fotos a inmuebles */
Photo.belongsTo(Estate);
Estate.hasMany(Photo);
 

/**Restaurante y Tiempo */
Restaurant.belongsTo(Time);
Time.hasMany(Restaurant)

/**Fotos relacionado con Restaurantes */
Menu.belongsTo(Restaurant);
Restaurant.hasMany(Menu);

Photo_Menu.belongsTo(Restaurant);
Restaurant.hasMany(Photo_Menu);

Menu.belongsTo(Menu_Type);
Menu_Type.hasMany(Menu);
