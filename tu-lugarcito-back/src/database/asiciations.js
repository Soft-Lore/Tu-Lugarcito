const Role = require('./models/Role');
const User = require('./models/User');
const Home_Type = require("./models/Home_type");
const Business_Type = require('./models/Business_Type');
const Photo = require("./models/Photo");
const Estate = require('./models/Estate');


User.belongsTo(Role);
User.hasMany(Estate);

Home_Type.hasMany(Estate);
Business_Type.hasMany(Estate);

Estate.belongsTo(User);
Estate.belongsTo(Home_Type);
Estate.belongsTo(Business_Type);
Estate.hasMany(Photo);

Photo.belongsTo(Estate);