const User = require('../resources/users/user.model.js')
const Task = require('../resources/tasks/tasks.model')


const users = [];
users.push(new User())
const board = [
  {
    "id": "9173a658-4f6c-425b-a558-b00f8b25d603",
    "title": "Title",
    "columns": [
      {
        "id": "1e697937-da0a-4bc0-b81b-05dc930e7600",
        "title": "Title",
        "order": 0
      }
    ]
  }
];

const task = [{
  "id":"818bcf00-e619-4f2d-a105-177f1c5e18cf",
  "title":"Title",
  "order":0,
  "description":"Description"}
  ];

task.push(new Task())

module.exports = {
  users,
  board,
  task
};
