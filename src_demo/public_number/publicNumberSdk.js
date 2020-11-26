/**
 * Created by Administrator on 2017/6/19.
 */

const PublicNumberSdkNode = require("../../Windows/sdk/PublicNumSdk.node").PublicNumSdk;
var sdk = new PublicNumberSdkNode();

/**
 * 初始化
 */
exports.initSDKPublicNum = function () {
    sdk.initSDKPublicNum();
};

/**
 * 取关注的公众号列表
 * @param callback publicNumbers
 */
exports.takeFocusedPublics = function (callback) {
    sdk.takeFocusedPublics(callback);
};


/**
 * 取关注的公众号列表
 * @param callback publicNumbers
 */
exports.recommendPublics = function (callback) {
    sdk.recommendPublics(callback);
};

/**
 * 读取公共号信息
 * @param id
 * @param callback publicNumber
 */
exports.fastPublicById = function (id, callback) {
    sdk.fastPublicById(id, callback);
};

/**
 * 加载公共号菜单
 * @param id
 * @param callback menu
 */
exports.takePublicMenu = function (id, callback) {
    sdk.takePublicMenu(id, callback);
};

/**
 * 发送公共号菜单消息
 * @param id
 * @param key
 * @param callback
 */
exports.sendPublicMenu = function (id, key, callback) {
    sdk.sendPublicMenu(id, key, callback);
};

/**
 * 关注公共号
 * @param id
 * @param follow 是否关注
 * @param callback
 */
exports.followPublicNum = function (id, follow, callback) {
    sdk.followPublicNum(id, follow, callback);
};

/**
 * 公众号搜索
 * @param accurate 精确搜索
 * @param index 页起始索引
 * @param page 页大小
 * @param key 搜索关键字
 * @param callback publicNumbers
 */
exports.searchPublicNum = function (accurate, index, page, key, callback) {
    sdk.searchPublicNum(accurate, index, page, key, callback);
};

/**
 * 公众号设置
 * @param id
 * @param recv PublicInformType
 * @param callback
 */
exports.setPublicInform = function (id, recv, callback) {
    sdk.setPublicInform(id, recv, callback);
};

/**
 * 监听
 * @param notiId PublicNumberListenerType
 * @param callback
 */
exports.addSDKListener = function (notiId, callback) {
    sdk.addSDKListener(notiId, callback);
};