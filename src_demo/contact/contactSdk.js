/**
 * Created by Administrator on 2017/5/27.
 */

const ContactSdk = require("../../Windows/sdk/ContactSdk.node").ContactSdk;
var sdk = new ContactSdk();

/**
 * 初始化
 */
exports.initSDKContact = function () {
    sdk.initSDKContact();
};

/**
 * 添加监听函数，每个类型只能添加一个回调
 * @param notifyType ContactListenerType
 * @param callback 回调函数
 */
exports.addSDKListener = function (notifyType, callback) {
    sdk.addSDKListener(notifyType, callback);
};

/**
 * 从服务器获取联系人信息
 * @param id
 * @param version
 * @param callback 回调参数takeCardResult
 */
exports.takeCard = function (id ,version, callback) {
    sdk.takeCard(id ,version, callback);
};

/**
 * 读取联系人信息
 * @param id
 * @param callback 回调函数 callback = function (map) { map["id"],...}
 */
exports.fastContactById = function (id, callback) {
    sdk.fastContactById(id, callback);
};

/**
 * 获取企业id
 * @param callback
 */
exports.takeEnterprizeId = function (callback) {
    sdk.takeEnterprizeId(callback);
};

/**
 * 通过手机号返回用户id和用户id是否开通
 * @param mobile 手机号数组
 * @param callback
 */
exports.userIdByMobile = function (mobile, callback) {
    sdk.userIdByMobile(mobile, callback);
};

/**
 * 从服务器搜索联系人
 * @param key
 * @param channel
 * @param callback
 */
exports.searchServContacts = function (key, channel, callback) {
    sdk.searchServContacts(key, channel, callback);
};

/**
 * 从服务器搜索联系人
 * @param key
 * @param channel
 * @param pageSize 分页大小
 * @param pageNumber 分页号
 * @param callback
 */
exports.fuzzySearchServContacts = function (key, channel, pageSize, pageNumber, callback) {
    sdk.fuzzySearchServContacts(key, channel, pageSize, pageNumber, callback);
};



/**
 * 从本地联系人中搜索
 * @param key
 * @param searchType SEARCH_CONTACTS_PARAM的类型组合
 * @param offset
 * @param limit
 * @param callback
 */
exports.searchContacts = function (key, searchType, offset, limit, callback) {
    sdk.searchContacts(key, searchType, offset, limit, callback);
};

/**
 * Build a request for updating personal card
 * @param name
 * @param mood
 * @param email
 * @param mailAddr
 * @param mailCode
 * @param extSysId
 * @param realname
 * @param extSysEmail
 * @param acount
 * @param userType
 * @param usernum
 * @param remark
 * @param cardType
 * @param cardNum
 * @param address
 * @param ext_01
 * @param ext_02
 * @param ext_03
 * @param ext_04
 * @param ext_05
 * @param company
 * @param departmentInfo
 * @param position
 * @param geogPosInfo
 * @param userLevel
 * @param expression
 * @param gender
 * @param callback
 */
exports.taskUpdateCard = function (name,
                                   mood,
                                   email,
                                   mailAddr,
                                   mailCode,
                                   extSysId,
                                   realname,
                                   extSysEmail,
                                   acount,
                                   userType,
                                   usernum,
                                   remark,
                                   cardType,
                                   cardNum,
                                   address,
                                   ext_01,
                                   ext_02,
                                   ext_03,
                                   ext_04,
                                   ext_05,
                                   company,
                                   departmentInfo,
                                   position,
                                   geogPosInfo,
                                   userLevel,
                                   expression,
                                   gender, callback) {
    sdk.taskUpdateCard(name,
        mood,
        email,
        mailAddr,
        mailCode,
        extSysId,
        realname,
        extSysEmail,
        acount,
        userType,
        usernum,
        remark,
        cardType,
        cardNum,
        address,
        ext_01,
        ext_02,
        ext_03,
        ext_04,
        ext_05,
        company,
        departmentInfo,
        position,
        geogPosInfo,
        userLevel,
        expression,
        gender, callback);
};

/**
 * 生成联系人二维码
 * @param usr uid
 * @param callback
 */
exports.buildUsrQRCode = function (usr, callback) {
    sdk.buildUsrQRCode(usr, callback);
};

exports.updateSelfInfo = function (name, sex, callback) {
	sdk.updateSelfInfo(name, sex, callback);
}

/*
 * 把第三方id转换为内部id
 @param id          第三方id数组 ["id1", "id2", ...] 字符串数组
 @param callback    回调返回id对应的内部id   = function (json) { json[usrId]=内部id (long); json[thirdId]="传入的外部id"; }
 */
exports.userIdByThirdId = function (id, callback) {
    sdk.userIdByThirdId (id, callback);
}

/*
 * 把内部id转换为第三方id
 @param id          内部id数组 [id1, id2, ...] long数组
 @param callback    回调返回id对应的内部id   = function (json) { json[usrId]=内部id (long); json[thirdId]="传入的外部id"; }
 */
exports.thirdIdByUserId = function (idList, callback) {
    sdk.thirdIdByUserId(idList, callback);
}

/*
 * 通过外部员工Id返回员工名字（民生）
 @param id          员工id数组 [id1, id2, ...] string数组
 @param callback    回调返回id对应的内部id和员工名字   = function (json) { json[usrId]=内部id (long); json[oaName]="名字";json[usrSN]="员工Id"; }
 */
exports.oaNameByUsrSN = function (idList, callback) {
    sdk.oaNameByUsrSN(idList, callback);
}











