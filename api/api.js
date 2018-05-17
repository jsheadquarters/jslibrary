const app = require("express")();
const majorVersion = 1;

//Prevent CORS errors
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //Remove caching
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const router = require("./routes");
app.use(`/api/v${majorVersion}`, router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API is running on port ${port}`));
