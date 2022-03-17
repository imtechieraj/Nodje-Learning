const Joi = require('joi');

const schema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required()
})

let result =schema.validate({ username: 'abc', birth_year: 1994 });
console.log(result.error.details[0].message)
// -> { value: { username: 'abc', birth_year: 1994 } }

// console.log(schema.validate({}))