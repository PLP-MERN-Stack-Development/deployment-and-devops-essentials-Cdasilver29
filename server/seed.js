const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Category = require('./models/Category');

dotenv.config();

const categories = [
  { name: 'Technology' },
  { name: 'Lifestyle' },
  { name: 'Health' },
  { name: 'Education' },
  { name: 'Entertainment' },
];

const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')      // replace spaces with -
    .replace(/[^\w-]+/g, '')   // remove all non-word chars
    .replace(/--+/g, '-')      // replace multiple - with single -
    .replace(/^-+/, '')        // trim - from start
    .replace(/-+$/, '');       // trim - from end

const seedCategories = async () => {
  try {
    await connectDB();
    await Category.deleteMany();

    const categoriesWithSlugs = categories.map((cat) => ({
      ...cat,
      slug: slugify(cat.name),
    }));

    await Category.insertMany(categoriesWithSlugs);
    console.log('✅ Categories seeded successfully');
    process.exit();
  } catch (error) {
    console.error('❌ Error seeding categories:', error);
    process.exit(1);
  }
};

seedCategories();

