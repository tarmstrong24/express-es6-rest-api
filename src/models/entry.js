import mongoose from 'mongoose';

const entrySchema = mongoose.Schema({
        exhibitorid : {type: Number, required: true},
        registrantid : {type: Number, required: true}
    },
    {collection: 'drawing'}
);

let entry = mongoose.model('entry', entrySchema);

export default entry;