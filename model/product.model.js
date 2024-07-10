const {default: mongoose} = require('mongoose');


const productSchema = mongoose.Schema (
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        price: {
            type: String,
            required: [true]
        },
        quantity: {
            type: Number,
            required: [true]
        }
    }
)

const Produto = mongoose.model("Product", productSchema);

module.exports = Produto