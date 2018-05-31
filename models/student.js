var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StudentSchema = new Schema(
  {
    name: {type: String, required: true},
    roll_no: {type:String, required: true}
  }
);

// Virtual for book's URL
StudentSchema
.virtual('url')
.get(function () {
  return '/catalog/student/' + this._id;
});

module.exports = mongoose.model('Student', StudentSchema);