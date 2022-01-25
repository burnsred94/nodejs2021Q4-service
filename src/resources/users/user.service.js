const usersRepo = require('./user.repository');


const getAll = () => usersRepo.getAll();

const getById = (id) => usersRepo.getById(id);

const updateUser = (update) => usersRepo.updateUser(update);

const createUser = (user) => usersRepo.createUser(user);

const deleteUser = (id) => usersRepo.deleteUser(id)

module.exports = { 
    getAll,
    getById,
    updateUser,
    createUser,
    deleteUser
};
