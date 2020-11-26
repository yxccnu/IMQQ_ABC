/**
 * Created by Administrator on 2017/5/2.
 */

const PortraitSdkNode = require("../../Windows/sdk/PortraitSdk.node").PortraitSdk;
var sdk = new PortraitSdkNode();

sdk.initSDKPortrait();

/*
 * 初始化
 */
exports.initSDKPortrait = function (callback) {
	sdk.initSDKPortrait();
};

/**
 * 添加监听函数，每个类型只能添加一个回调
 * @param notifyType FriendsListenerType
 * @param callback 回调函数
 */
exports.addSDKListener = function (notifyType, callback) {
    sdk.addSDKListener(notifyType, callback);
};

/*
 * Cache读取联系人头像，界面UI应该直接使用该函数读取联系人头像，以获得更快的速度
 * 如果Cache不存在，自动读取文件，如果文件不存在，自动从服务器下载
 * id 联系人id, thumb 联系人头像thumb
 * @param onTrying 回调函数，告诉界面正在从服务器下载，界面可以显示等待中。。。 onTrying = function (id) { id是联系人id； }
 * @param callback 回调函数，返回结果  callback = function (id, path) { id是联系人id; path是头像路径，如果不存在返回""; }
 */
exports.fastPortraitById = function (id, thumb, onTrying, callback) {
    sdk.fastPortraitById(id, thumb, onTrying, callback);
};

/*
 * 上传头像
 * fileId	文件id
 * fileSize	文件大小
 * thumb		缩略图内容
 * thumbSize	缩略图内容大小
 */
exports.uploadPortrait = function (fileId, fileSize, thumb, thumbSize, onResult) {
    sdk.uploadPortrait(fileId, fileSize, thumb, thumbSize, onResult);
};

/*
 * 从服务器重新下载头像(同时用新头像清空本地缓存) 
 * usrId    用户id
 * fileId	文件id, 可以为空""
 * onResult 回调返回头像路径 onResult = function (usrId, path) { 用户usrId的头像路径是path; }
 */
exports.takeThumb = function (usrId, thumbId, onResult) {
    sdk.takeThumb (usrId, thumbId, onResult);
};

/*
 * 设置默认头像 
 * onResult 回调返回头像路径 onResult = function (suc) { if (suc) 成功; }
 */
exports.resetPortrait = function (onResult) {
    sdk.resetPortrait (onResult);
};