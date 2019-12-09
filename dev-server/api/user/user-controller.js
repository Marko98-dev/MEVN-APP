const index = function (req, res) {
  return res.status(200).json({ message: 'Hello World !' });
};

exports.index = index;