const Url = require("../models/Url");
exports.home = (req, res) => {
  res.render("index");
};
exports.addUrl = async (req, res) => {
  let response;
  const url = new Url({
    urlOriginal: req.body.urlOriginal,
  });
  try {
    let result = await url.save();
    response = {
      code: 201,
      url: result.urlShort,
      urlOriginal: req.body.urlOriginal,
    };
  } catch (err) {
    console.log(err);
    response = {
      code: 400,
      err: "there was an error",
    };
  }
  res.json(response);
};
exports.redirectUrl = async (req, res) => {
  try {
    const url = await Url.findOne({
      urlShort: req.params.url,
    });
    if (!url) {
      res.redirect("/?error=404");
    }
    res.redirect(url.urlOriginal);
  } catch (error) {
    console.log(error);
  }
};
