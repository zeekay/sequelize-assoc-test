models  = require("./models")
{Project, Task} = models

models.sync(force: true).success ->
  Project
    .create
      name: "Sequelize"
      description: "A nice MySQL ORM for NodeJS"
    .success (project) ->
      Task
        .create
          name: "Choose a nice MySQL connector"
          deadline: new Date()
          importance: 10
        .success (task1) ->
          Task
            .create
              name: "Build the rest"
              deadline: new Date()
              importance: 90
            .success (task2) ->
              project.setTasks([task1, task2]).success (tasks) ->
                console.log project
                console.log tasks
