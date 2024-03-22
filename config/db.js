const mongoose = require("mongoose");

const connection = async () => {
  try {
    const mongoURI =
      "mongodb+srv://sweetyjharbade999:plZa1nFJBxPZig0H@cluster0.fnrxgpo.mongodb.net/?retryWrites=true&w=majority";

    await mongoose.connect(mongoURI);

    console.log("MongoDB connected successfully.");
  } catch (err) {
    console.error("Error connecting to MongoDB: ", err);
  }
};

module.exports = {
  connection,
};