const usersRepo = require('./user.memory.repository');



const getAll = () => usersRepo.UserDB.getAll();

const getById = (id) => usersRepo.UserDB.getById(id);

const putId = (id, updateUser) => usersRepo.UserDB.userUpdate(id, updateUser);

const postUser = (user) => usersRepo.UserDB.creatUser(user);

const deleteUser = (id) => usersRepo.UserDB.removeUser(id)

module.exports = { 
    getAll,
    getById,
    putId,
    postUser,
    deleteUser
};
