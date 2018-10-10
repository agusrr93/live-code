var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quotesSchema = new Schema({
  description: {
      type:String,
      required:true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'      
  }
});


var Quotes = mongoose.model('Quotes', quotesSchema);

module.exports=Quotes