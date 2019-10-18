const { Model } = require('objection')

class Appointment extends Model {
  static get tableName() {
    return 'appointments'
  }

  static get relationMappings() {
    const User = require('./User')
    return {
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'appointments.id',
          through: {
            // users_appointments is the join table.
            from: 'users_appointments.appointment_id',
            to: 'users_appointments.user_id'
          },
          to: 'users.id'
        }
      }
    }
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['user_one', 'location'],

      properties: {
        id: { type: 'integer' },
        user_one: { type: 'integer' },
        user_two: { type: 'integer' },
        location: { type: 'string', minLength: 1, maxLength: 255 }
      }
    }
  }
}

module.exports = Appointment
