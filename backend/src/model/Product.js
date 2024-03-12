const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    offer: {
        type: Number
    },
    productPicture: [
        {
            img: {
                type: String
            }
        }
    ],
    reviews: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            review: String
        }
    ],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    updatedAt: Date,

}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);