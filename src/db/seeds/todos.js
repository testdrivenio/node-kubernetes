
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(() => {
      // Inserts seed entries
      return knex('todos').insert([
        {title: 'Do something', completed: false},
        {title: 'Do something else', completed: false}
      ]);
    });
};
