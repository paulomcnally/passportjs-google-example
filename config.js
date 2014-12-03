var config = {
  // https://console.developers.google.com
  google: {
    client: {
      id: process.env.GOOGLE_CLIENT_ID || '',
      secret: process.env.GOOGLE_CLIENT_SECRET || '',
      callbackUrl: process.env.GOOGLE_CALLBACK_URL || ''
    }
  },
  session: {
    secret: process.env.SESSION_SECRET || ''
  }
}

module.exports = config;
