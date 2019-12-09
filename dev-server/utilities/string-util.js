const StringUtil = class {
  static isEmpty (value) {
    return !value || !value.trim();
  };
  
  static capitalize (word) {
    return word.charAt(0).toUpperCase();
  };
};
  
exports.StringUtil = StringUtil;
  