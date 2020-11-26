/**
 * Created by Administrator on 2017/5/15.
 */


const AccountsSdkNode = require("../../Windows/sdk/AccountsSdk.node").AccountsSdk;
var sdk = new AccountsSdkNode();


/**
 * 初始化
 */
exports.initSDKAccounts = function () {
    sdk.initSDKAccounts();
};

/**
 * 获取短信验证码
 * @param mobile 手机号
 * @param channelId 通道号
 * @param callback 结果回调
 */
exports.getSMSForReg = function (mobile, channelId, callback) {
    sdk.getSMSForReg(mobile, channelId, callback);
};

/**
 * 重置密码
 * @param mobile 手机号
 * @param code 验证码
 * @param password 密码
 * @param channel 渠道号
 * @param callback 结果回调
 */
exports.resetPwd = function (mobile, code, password, channel, callback) {
    sdk.resetPwd(mobile, code, password, channel, callback);
};

/**
 * 修改密码
 * @param oldPW		旧密码
 * @param newPW		新密码
 * @param callback  结果回调 function (suc, errCode) { if (!suc) { errCode = 返回错误码 1: 原始密码错误 2:重置失败; } }
 */
exports.changePwdByOld = function (oldPW, newPW, callback) {
    sdk.changePwdByOld(oldPW, newPW, callback);
};
