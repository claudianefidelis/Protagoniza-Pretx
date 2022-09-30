const projetos = require('../models/projetos')

const handle = async ({ name, state, topic, description, format, email }) => {
  const newproject = new projetos({
    name, state, topic, description, format, email
  })
  return newproject.save()
}

module.exports = { 
  handle
}