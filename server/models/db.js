const mongoose = require('mongoose')
const config = require('../config/config')

mongoose.connect(
  `mongodb://localhost:27017/${config.DB_NAME}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(config.DB_URL)
      console.log(config.DB_NAME)
      console.log('🔴 error connecting', err)
    } else {
      console.log('✅ connected to the db')
    }
  },
)

module.exports = mongoose
