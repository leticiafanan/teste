const bodyParserConfig = {
  whitelistedMethods: ['POST', 'PUT', 'PATCH'],
  multipart: {
    autoProcess: false,
    types: ['multipart/form-data'],
  },
};

export default bodyParserConfig;
