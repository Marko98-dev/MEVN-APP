const { StringUtil } = require('../../utilities/string-util');
const User = require('../../model/user-model');

const index = function (req, res) {
  const validation = validateIndex(req.body);
  if (!validation.isValid) {
    return res.status(400).json({ message: validation.message });
  }
  User.findOne({ username: req.body.username.toLowerCase() }, (error, user) => {
    if (error) {
      return res.status(500).json();
    } else if (!user) {
      return res.status(401).json();
    }

    const passwordsMatch = User.passwordsMatch(req.body.password, user.password);
    if (!passwordsMatch) {
      return res.status(401).json();
    };
    return res.status(200).json();
  });
};

function validateIndex (body) {
  let errors = '';

  if (StringUtil.isEmpty(body.username)) {
    errors += 'Username is required';
  };

  if (StringUtil.isEmpty(body.password)) {
    errors += 'Password is required';
  };

  return {
    isValid: StringUtil.isEmpty(errors),
    message: errors
  };
};

exports.index = index;
