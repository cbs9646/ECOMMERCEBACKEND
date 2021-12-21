// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: ''
  
});
// Categories have many Products
Category.belongsToMany(Product, {
  through: { 
    model: Tag,
    unique: false
  }
});

// Products belongsToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'product_tags'
});




// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
through: {
  model: ProductTag,
  unique: false
}
 
});



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
