
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'John', last_name:"armbruster", email:"john@gal.com", age:100},
        {first_name: 'David', last_name:"Bayless", email:"david@gal.com", age:20 },
        {first_name: 'Troy', last_name:"Amelotte", email:"t@gal.com", age:14 }
      ]);
    });
};
