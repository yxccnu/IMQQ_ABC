/**
 * Created by Administrator on 2017/5/17.
 */

const EmotionSdkNode = require("../../Windows/sdk/EmotionSdk.node").EmotionSdk;
var sdk = new EmotionSdkNode();


/**
 * 初始化
 */
exports.initSDKEmotion = function () {
    sdk.initSDKEmotion();
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
 * 读取EMotion列表
 * @param callback	function (json) { if (json[suc]) { json[result]; }
 */
exports.LoadEmotionList = function (callback) {
    sdk.LoadEmotionList(callback);
};

/*
 * 读取EMotion详情
 * @param idList    (long类型的数组) 表情id数组 
 * @param callback	function (json) { if (json[suc]) { json[result]; }
 */
exports.LoadEmotionDetail = function (idList, callback) {
    sdk.LoadEmotionDetail(idList, callback);
};

/*
 * 订购EMotion
 * @param id	    (long) 表情id
 * @param callback	function (suc, error) { if (!suc) { show (error); }
 */
exports.OrderEmotion = function (id, callback) {
    sdk.OrderEmotion(id, callback);
};

/*
 * 读取已订购EMotion列表
 * @param callback	function (json) { if (json[suc]) { json[result]; }
 */
exports.LoadOrderedEmotionList = function (callback) {
    sdk.LoadOrderedEmotionList (callback);
};

/*
 * 是否订购了EMotion
 * @param id	    (long) 表情id
 * @param callback	function (isAuthed) { if (isAuthed == 1) { show ("已经订购"); }
 */
exports.isEmotionAuthed = function (id, callback) {
    sdk.isEmotionAuthed (id, callback);
};

/*
 * 添加自定义表情
 * @param progCallback	function (path, prog) { 文件path的上传进度是prog%; }
 * @param callback	function (path, suc, json) { if (suc) { 表情上传成功; json=表情的详情; }
 */
exports.addOwnEmotion = function (filePath, progCallback, callback) {
    sdk.addOwnEmotion(filePath, progCallback, callback);
};

/*
 * 删除自定义表情
 * @param id	    (long) 表情id
 * @param callback	function (id, suc) { if (suc) { show ("表情被删除"); }
 */
exports.removeOwnEmotion = function (id, callback) {
    sdk.removeOwnEmotion(id, callback);
};

/*
 * 加载自定义表情列表
 * @param callback	function (json) { json 自定义表情列表; }
 */
exports.loadOwnEmotions = function (callback) {
    sdk.loadOwnEmotions(callback);
};

/*
 * 设置自定义表情列表的顺序
 * @param idList	    (long array) 表情id数组
 * @param indexList	(int array)  顺序数组 (和idList数组大小一致) 
 * @param callback	function (suc) { if (suc) 设置顺序成功! }
 */
exports.orderOwnEmotions = function (idList, indexList, callback) {
    sdk.orderOwnEmotions(idList, indexList, callback);
};