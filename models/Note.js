const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
    },
    userId: {
        type: String, 
        required: true
   
    },
    title: {
        type: String,
        required: true,
     
    },
    content: {
        type: String,
        required: true,
   
    },
    date: {
        type: Date,
        default: Date.now
    }
});


// export const Notes = mongoose.model("Notes" , notesSchema);

module.exports = mongoose.model("Note" , noteSchema);