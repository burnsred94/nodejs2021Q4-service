import { UsersDB } from './user.repository'
import { User } from './user.model';

const userRepository = new UsersDB()

const getAll = () => userRepository.getAll();

const getById = (id: string) => userRepository.getById(id);

const updateUser = (id : string, update: User) => userRepository.updateUser(id, update);

const createUser = (user: User) => userRepository.createUser(user);

const deleteUser = (id: string) => userRepository.deleteUser(id);

export {
    getAll,
    getById,
    updateUser,
    createUser,
    deleteUser
};
