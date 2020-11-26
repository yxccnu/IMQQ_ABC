/**
 * Created by Administrator on 2017/5/2.
 */

const BaseSdkNode = require("../../Windows/sdk/BaseSdk.node").BaseSdk;
var sdk = new BaseSdkNode();


/**
 * 初始化，回调函数显示app的状态变化信息
 * @param callback
 */
exports.appDoInit = function (callback, log) {
    sdk.appDoInit(callback, log);
};

/**
 * 添加监听函数，每个类型只能添加一个回调
 * @param notifyType notifyType
 * @param callback 回调函数
 */
exports.addSDKListener = function (notifyType, callback) {
    sdk.addSDKListener(notifyType, callback);
};

/**
 * 取所有账号列表
 * @param callback
 */
exports.allAccounts = function (callback) {
    sdk.allAccounts(callback);
};

/**
 * 登录
 * @param id
 * @param pwd
 * @param channel
 * @param savePwd 0/1
 * @param autoLogin 0/1
 */
exports.appLogin = function (id, pwd, channel, savePwd, autoLogin) {
    sdk.appLogin(id, pwd, channel, savePwd, autoLogin);
};

/**
 * 第三方登录方式登录(民生银行手机端)
 * @param key
 */
exports.thirdAppLoginByKey = function (key) {
    sdk.thirdAppLoginByKey (key);
};

/**
 * 第三方登录方式登录(民生银行PC端)
 * @param appCode (string)
 * @param bussCode (string)
 * @param id (string)       用户名
 * @param pw (string)       密码
 * @param random (string)   
 * @param channel (string)  渠道号 "2"
 * @param savepw (int)      1 保存密码 0 不保存
 * @param autologin (int)   1 自动登录 0 不自动登录
 */
exports.thirdAppLoginByAppCode = function (appCode, bussCode, id, pw, random, channel, savepw, autologin) {
    sdk.thirdAppLoginByAppCode(appCode, bussCode, id, pw, random, channel, savepw, autologin);
};

/**
 * 第三方帐号登录方式 (民生银行PC端使用Cookie登录）
 * @param clientId (string)     "A27"
 * @param clientSecret (string) "oEQAfbw4JXxCQ8cF"
 * @param cookie (string)       
 * @param channel (string)  渠道号 "2"
 */
exports.thirdAppLoginByCookie = function (clientId, clientSecret, cookie, channel) {
    sdk.thirdAppLoginByCookie(clientId, clientSecret, cookie, channel);
};

/*
 * 注销
 */
 exports.appLogout = function () {
	 sdk.appLogout();
 }

/*
 * 扫码登录, 调用后会收到 NOTIFY_QRCODE_FOR_LOGIN 通知返回二维码
 @param channel     渠道号 "2"
 */
 exports.QRCodeLogin = function (channel) {
     sdk.QRCodeLogin(channel);
 }

 /*
  * 取消扫码登录
  * 用户切断到别的登录方式时,应该调用该函数取消
  */
 exports.QRCodeCancelLogin = function () {
     sdk.QRCodeCancelLogin();
 }

/**
 * 从账号列表删除
 * @param uid
 */
exports.deleteAccount = function (uid) {
    sdk.deleteAccount(uid);
};

exports.getSdkParam = function (cmdAppParams, callback) {
    sdk.sdkParamGet(cmdAppParams, callback);
};


exports.setSdkParam = function (cmdAppParams, value) {
    sdk.sdkParamSet(cmdAppParams, value);
};

exports.getAppUserId = function () {
    return sdk.getAppUserId();
};

exports.recvedPush = function (data) {
    sdk.recvedPush(data);
}

/*
 * 设置免打扰
 @param id (int)   免打扰id (联系人或者群id)
 @param set (int)  1 设置免打扰 0 取消设置免打扰
 @param callback   = function (suc) { if (suc) 成功; }
 */
exports.setDontDisturb = function (id, set, callback) {
    sdk.setDontDisturb(id, set, callback);
};

/*
 * 获取免打扰
 @param id (int)   免打扰id (联系人或者群id)
 @param callback   = function (set) { if (set) 设置了免打扰; }
 */
exports.getDontDisturb = function (id, callback) {
    sdk.getDontDisturb (id, callback);
};

/*
 * 检测版本升级
 @param id (string)  用户id
 @param callback   = function (result, downloadUrl, detailPageUrl) { switch(result){ 1 返回OK 2 返回强制升级 3 返回错误 } }
 */
exports.checkVersion = function (id, callback) {
    sdk.checkVersion(id, callback);
};

/*
 * 设置音量
 @param volume (number)  0-100
 */
exports.setMixVolume = function (volume) {
    sdk.setMixVolume (volume);
};