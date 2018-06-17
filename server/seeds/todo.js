
exports.seed = function(knex, Promise) {
  return knex('todo').del()
    .then(function () {
      const todos = [{
        title: 'Build TODO',
        priority: 1,
        date: new Date()
      }, {
        title: 'Do the..',
        priority: 3,
        date: new Date()
      }, {
        title: 'Render a view',
        priority: 1,
        date: new Date()
      }, {
        title: 'Walk',
        priority: 2,
        date: new Date()
      }, {
        title: '?',
        priority: 4,
        date: new Date()
      }];

      return knex('todo').insert(todos);

    });
};
