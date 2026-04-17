// Assignment of 3rd April

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/crud_lab')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ Connection error:', err));

const ItemSchema = new mongoose.Schema({
  name: String,
  price: Number
});

const Item = mongoose.model('Item', ItemSchema);

async function runLab() {
  // CREATE
  const newItem = await Item.create({ name: 'Laptop', price: 1200 });
  console.log('Created:', newItem);

  // READ
  const allItems = await Item.find();
  console.log('Current Inventory:', allItems);

  await Item.updateOne({ name: 'Laptop' }, { price: 1100 });
  console.log('Updated Laptop Price.');

  mongoose.connection.close();
}

runLab();