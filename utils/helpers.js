// exports modules for format_date and returns getMonth(), getDate(), & getFullYear()
module.exports = {
  format_date: date => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }
};
