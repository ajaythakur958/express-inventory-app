import multer from "multer";

const storageConfig = multer.diskStorage({
    destination: (req,res,cb) => {
        cb(null,'public/images');
    },
    filename: (req,res,cb) => {
        const name = Date.now() + ' ' + fileLoader.originalname;
        cb(null, name);
    }
});

export const uploadFile = multer({
    storage: storageConfig
});