/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_database:
          'mongodb+srv://eventsApp:x1MCzrt00gwk39c4@atlascluster.4hjfb2e.mongodb.net/?retryWrites=true&w=majority',
      },
    };
  }

  return {
    env: {
      mongodb_database:
        'mongodb+srv://eventsApp:x1MCzrt00gwk39c4@atlascluster.4hjfb2e.mongodb.net/?retryWrites=true&w=majority',
    },
  };
};
