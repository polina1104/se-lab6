import express from 'express';
import { v4 as uuidv4 } from 'uuid';  //добавляем uuid для создания уникальных id

const router = express.Router();

let users = [];

//all routes in here are starting with /users
router.get('/', (req, res) => {

    res.send(users);
});

//add a new user
router.post('/', (req, res) => {

    const user = req.body;

    users.push( { ...user, id: uuidv4()} );      //add user

    res.send(`User with the name ${user.firstName} added to the base`);
});

router.get('/:id', (req, res) => {
    const {id} = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
})

//удачение пользователя. берется id -> false (!===) -> удаляется пользователь
router.delete('/:id', (req, res) => {
    const {id} = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted from the base`);
});

//updating the info
router.put('/:id',(req, res) => {
    const {id} = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;
    res.send(`User with the ${id} has been updated`);
});

export default router;