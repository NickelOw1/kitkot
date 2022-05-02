const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const router = new Router();
const {body} = require('express-validator');
const uploadController = require('../controllers/upload-controller')
const authMiddleware = require('../middlewares/auth-middleware');

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/getvideos', uploadController.getVideos);
router.get('/getavatar', uploadController.getAvatar);
router.post('/uploadvideo', authMiddleware, uploadController.uploadVideo)
router.post('/uploadavatar', authMiddleware, uploadController.uploadAvatar)
router.post('/updatenickname', userController.changeNick)

module.exports = router
