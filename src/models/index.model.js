import { UserModel } from "./User.model.js";
import { profileModel } from "./profile.model.js";
import { tagModel } from "./tag.model.js";

// ----------------------
// Relaciones User ↔ Profile
// ----------------------
profileModel.hasOne(UserModel, {
    foreignKey: "person_id",
    as: "user",
    onDelete: "CASCADE",   // eliminación en cascada
    onUpdate: "CASCADE"
});

UserModel.belongsTo(profileModel, {
    foreignKey: "person_id",
    as: "profile"
});

// ----------------------
// Relaciones Profile ↔ Tag
// ----------------------
profileModel.hasMany(tagModel, {
    foreignKey: "profile_id",
    as: "tags",
    onDelete: "CASCADE",   
    onUpdate: "CASCADE"
});

tagModel.belongsTo(profileModel, {
    foreignKey: "profile_id",
    as: "profile"
});


export { UserModel, profileModel, tagModel };
