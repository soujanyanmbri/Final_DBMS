const errorFunction = (req, res) => {
  return (err) => {
    console.log(err);
    res.status(500).send({
      success: false,
      error: err
    });
  }
}
module.exports = {
  errorFunction
}
