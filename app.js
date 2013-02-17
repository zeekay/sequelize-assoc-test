var models = require('./models'),
    Project = models.Project,
    Task = models.Task;

models.sync({force: true}).success(function() {
  Project
    .create({ name: 'Sequelize', description: 'A nice MySQL ORM for NodeJS' })
    .on('success', function(project) {
      Task.create({ name: 'Choose a nice MySQL connector', deadline: new Date(), importance: 10 })
        .on('success', function(task1) {
          Task.create({ name: 'Build the rest', deadline: new Date(), importance: 90 })
            .on('success', function(task2) {
              project.setTasks([task1, task2]).on('success', function(tasks) {
                console.log(project)
                console.log(tasks)
              })
            })
        })
    })
})
