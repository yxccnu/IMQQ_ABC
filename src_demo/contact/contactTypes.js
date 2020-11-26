/**
 * Created by Administrator on 2017/5/27.
 */

var takeEnterprizeIdResult = {
    suc: "number 0/1",
    eid: "number 企业id",
    uid: "number 用户id"
};

var takeCardResult = {
    version: "number ",
    id: "number ",
    isOnline: "number 0/1",
    expression: "number ",
    isMale: "number ",
    name: "string ",
    mood: "string ",
    portrait: "string ",
    phone: "string ",
    mailAddr: "string ",
    mailCode: "string ",
    extSystemId: "string ",
    realname: "string ",
    extSystemEmail: "string ",
    acount: "string ",
    userType: "string ",
    userLevel: "string ",
    userNum: "string ",
    remark: "string ",
    cardType: "string ",
    cardnum: "string ",
    address: "string ",
    company: "string ",
    departmentInfo: "string ",
    position: "string ",
    geogPosInfo: "string ",
    onLineStatus: "number ",
    labels:["string", "string"],
    namePinyin: "string ",

};

var fastContactByIdResult = {
    isSync: "number 0/1",
    card: takeCardResult
};

var userIdByMobileResult = [{
    usrId: "number ",
    activeStatus: "number ",
    mobile: "string "
}];

var searchServContactsResult = [{
    usrId: "number ",
    channel: "string ",
}];

var searchContactsResult = [
    takeCardResult
];

var taskUpdateCardResult = takeCardResult;

var buildUsrQRCodeResult = {
    qrcode: "string "
};

//----------------------

/*
 * searchContacts 预定义的搜索类型
 */
var SearchContactsParam = {
    SCP_NAME : 0x01,
    SCP_NAME_PINYIN : 0x01 << 1,
    SCP_MOBILE : 0x01 << 2,
};
exports.SearchContactsParam = SearchContactsParam;

/*
 * 通知定义
 */
var ContactListenerType = {
    NOTIFY_CARD_CHANGED : 10,				// 联系人信息发生变化 long1 user-id, obj5 ICard*
    NOTIFY_UPDATE_SELF_CARD : 11,			// 鏇存柊鍚嶇墖
    NOTIFY_PHONE_BOOK_GET_VERSION : 12,

};
exports.ContactListenerType = ContactListenerType;

