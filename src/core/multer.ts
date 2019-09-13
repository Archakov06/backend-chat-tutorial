const multer = require("multer");
const storage = multer.memoryStorage();

const uploader = multer({ storage });

export default uploader;
