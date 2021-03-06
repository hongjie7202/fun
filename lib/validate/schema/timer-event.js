'use strict';

const timerEventSchema = {
  '$id': '/Resources/Service/Function/Events/Timer',
  'type': 'object',
  'properties': {
    'Type': {
      'type': 'string',
      'const': 'Timer'
    },
    'Properties': {
      'type': 'object',
      'properties': {
        'Payload': {
          'type': 'string'
        },
        'CronExpression': {
          'type': 'string'
        },
        'Enable': {
          'type': 'boolean'
        },
      },
      'required': ['CronExpression']
    }
  }
};

module.exports = timerEventSchema;