const mongoose = require("mongoose");
const Student = require("./server/models/User"); // Adjust to the correct path of your Student model

const MONGODB_URI = "mongodb+srv://krishna:1234@cluster0.0txji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your actual connection string

const createDuplicateEntries = async () => {
  try {
    // Step 1: Connect to MongoDB
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to MongoDB successfully.");

    // Step 2: Create three student entries without friends initially
    const student1 = new Student({
      name: "Student One",
      email: "student1@example.com",
      username: "student1",
      password: "password1",
      phoneNo: "1234567890"
    });

    const student2 = new Student({
      name: "Student Two",
      email: "student2@example.com",
      username: "student2",
      password: "password2",
      phoneNo: "0987654321"
    });

    const student3 = new Student({
      name: "Student Three",
      email: "student3@example.com",
      username: "student3",
      password: "password3",
      phoneNo: "1122334455"
    });

    // Step 3: Save the students to the database
    const savedStudent1 = await student1.save();
    const savedStudent2 = await student2.save();
    const savedStudent3 = await student3.save();

    // Step 4: Add each student to each other's friends list
    savedStudent1.friends.push(savedStudent2._id, savedStudent3._id);
    savedStudent2.friends.push(savedStudent1._id, savedStudent3._id);
    savedStudent3.friends.push(savedStudent1._id, savedStudent2._id);

    // Step 5: Save the updated student entries
    await savedStudent1.save();
    await savedStudent2.save();
    await savedStudent3.save();

    console.log("Three duplicate students added successfully with mutual friendships.");
  } catch (error) {
    console.error("Error adding duplicate entries:", error);
  } finally {
    // Step 6: Close the connection
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
  }
};

createDuplicateEntries();
