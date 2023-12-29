

function getRequestHeaders() {
  const apiKey = 'edb691c4-68cf-4894-ac9a-bdbb9eb187e8';
  return {
    headers: {
      'api-key': apiKey,
    },
  };
}

module.exports = { getRequestHeaders };
