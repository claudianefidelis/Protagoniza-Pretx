const projects = require('../models/projetos')

const handle = async () => {
  const allProjects = await projects.find();
  if (!allProjects) {
    throw new NotFoundError('Not Found')
  }
  return allProjects
}

module.exports = { 
  handle
}