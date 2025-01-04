// require("dotenv").config();
const fs = require("fs");
const multer = require("multer");
const path = require("path");

// Function to ensure folder exists
function ensureFolderExists(folderPath) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`Folder created at: ${folderPath}`);
  }
}

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Extract postId from the request
    const postId = req.body.postId;

    // Define the directory path based on postId
    const folderPath = path.join(process.cwd(), "/uploads", postId);

    // Ensure the directory exists
    ensureFolderExists(folderPath);

    cb(null, folderPath); // Set the destination folder for the file
  },
  filename: (req, file, cb) => {
    const filePath = `${new Date() - 0}_${file.originalname}`;
    req.filePath = path.join(req.body.postId, filePath);
    cb(null, filePath); // Unique filename
  },
});

const upload = multer({ storage });

module.exports = { upload };

// app.post("/upload", upload.single("image"), (req, res) => {
//   console.log(req.file);
//   console.log(req.body);
//   res.send({ message: "Image uploaded!", file: req.file });
// });
