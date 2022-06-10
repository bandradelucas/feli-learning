Product = require('../Models/product/Product');

exports.index = function (req, res) {
    Product.get(function (err, product) {
      if (err)
          res.json({
              status: "error",
              message: err
          });
      res.json({
          message: "Got product Successfully!",
          data: product       
      });
  });
};