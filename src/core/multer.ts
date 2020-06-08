import multer from 'multer';
const storage = multer.memoryStorage();

const uploader = multer({ storage });

export default uploader;
