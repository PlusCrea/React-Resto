const sliderRouter = require("./slider.router");
const reviewRouter = require("./review.router");
const menuRouter = require("./menu.router");
const uploadRouter = require("./upload.router");
const galleryRouter = require("./gallery.router");

const AppRoutes = (app) => {
  app.use(sliderRouter.routePrefix, sliderRouter.route());
  app.use(reviewRouter.routePrefix, reviewRouter.route());
  app.use(menuRouter.routePrefix, menuRouter.route());
  app.use(uploadRouter.routePrefix, uploadRouter.route());
  app.use(galleryRouter.routePrefix, galleryRouter.route());
};

//export default AppRoutes;

module.exports = AppRoutes;
