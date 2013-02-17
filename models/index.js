var Sequelize = require('sequelize'),
    sequelize = new Sequelize('sequelize_assoc_test', 'zk', null, {
      dialect: 'postgres',
      host: '127.0.0.1',
      port: '5432'
    }),
    Project = sequelize.import(__dirname + '/Project'),
    Task    = sequelize.import(__dirname + '/Task');

Project.hasMany(Task);
Task.belongsTo(Project);

module.exports = {
  sync: function() {
    return sequelize.sync.apply(sequelize, arguments);
  },
  Project: Project,
  Task: Task
};
