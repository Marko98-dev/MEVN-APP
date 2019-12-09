const taskRoutes = require('./api/task/tasks-routes');
const regRoutes = require('./api/register/register-routes');
const userRoutes = require('./api/user/user-routes');
const authRoutes = require('./api/auth/auth-routes');

const registerRoutes = function (app) {
  app.use('/api', taskRoutes);
  app.use('/api', regRoutes);
  app.use('/api', userRoutes);
  app.use('/api', authRoutes);
};

exports.registerRoutes = registerRoutes;
