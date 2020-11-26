/**
 * Created by Administrator on 2017/5/8.
 */

const {ProfileType, DATA_MEMBER} = require("./enterpriseTypes");

 
var addon = require('../../Windows/sdk/ebooksdk');// 引入政企sdk的node文件
efetion = addon.createObject();   // 创建对象

// 通讯录下载结果回调，用完清空
var cbDownload;
// getDepart的回调，map
var DepartCallbacks = {};
// getDepart部门是否叶子节点
var DepartIsLeaf = {};

// 云端搜索回调
var SearchCallbacks = {};

// // getDepart命令id，用于标识是哪次调用的回调
// var CmdId = 12345;
// function getCmdId() {
//     return ++CmdId;
// }

efetion.bind('ObvName', OnNotify);    // 绑定通知

efetion.initEfetion();

function OnNotify(jsonPara) {
    console.log(jsonPara);
    var msgName = jsonPara.msgName;
    switch (msgName) {
		// 通讯录下载
        case "EnterpriseList_Downloaded":
            onDownlaod(true);
            break;
        case "EnterpriseList_DownloadFailed":
            onDownlaod(false);
            break;
        case "EnterpriseDepart_DownloadFailed": //
            onDepart(jsonPara, "failed");
            break;
        case "EnterpriseDepart_Restored": // 人员和部门恢复
            onDepart(jsonPara);
            break;
        case "EnterpriseEmp_Downloaded": // 人员下载完成
            onDepart(jsonPara);
            break;
        case "EnterpriseEmp_Update": // 人员版本号更新了 ？
            // if (jsonPara.para2 == "1") {
            //     var cmd = efetion.encodeCmdLine("downloadEmps", "", clickItem.id, clickItem.DM_VERSION, clickItem.DM_EMPVSERSION);
            //     efetion.InvokeSession("CWorkEnterpriseBook:", 1, cmd, 1);
            // }
            break;
// 云端搜索
        case "ModifySearchEmployees_Success": //
            onSearch(jsonPara);
            break;
        case "ModifySearchEmployees_Faild":
            onSearch(jsonPara, "failed");
            break;
		case "EnterpriseEmp_Pgm_Success":
			onPgmSearch(jsonPara);
			break;
		case "EnterpriseEmp_Pgm_Faild":
			onPgmSearch(jsonPara, "failed");
			break;
        default:
            break;
    }
}

/**
 * 通讯录下载返回结果出来
 * @param state
 */
function onDownlaod(state) {

    if(cbDownload) {
        cbDownload(state);
        cbDownload = null;
    }
}
/**
 * 获取部门的回调处理
 * @param json
 */
function onDepart(json, err) {
//para1: "CDataEnterprise:321399966989", para2: "94228"


    var departData;
if("EnterpriseDepart_Restored" == json.msgName ||
    "EnterpriseEmp_Downloaded" == json.msgName) {
    var departId = json.para2.toString(),
        dataPath = json.para1;

    if("EnterpriseEmp_Downloaded" == json.msgName) {
        dataPath = json.para4;
    }

    const root = efetion.findRootData(dataPath);
    const count = efetion.getChildSize(root);
    //const isLeaf = efetion.getDataProp(root, DATA_MEMBER.DM_SEX);
    const isLeaf = DepartIsLeaf[departId];
    if(isLeaf == 1) {
        departData = getPeopleArray(count, root);
    } else {
        departData = getDepartArray(count, root);
    }
}

    DepartCallbacks[departId](departData, err);
    delete DepartCallbacks[departId];
}


const defaultPortrait = "";
function getPeopleArray(k, root) {
    // console.log('叶子节点');
    let peopleArr = [];
    // 部门id
    let departId = efetion.getDataProp(root, DATA_MEMBER.DM_SERINUM);
    for (let i = 0; i < k; i++) {
        let child = efetion.getDataChild(root, i);
        // sip_id
        let sip_id = efetion.getDataProp(child, DATA_MEMBER.DM_ID);
    //    let path = portraitService.getPortratiBySipID(sip_id);
        // userId
        let DM_SERINUM = efetion.getDataProp(child, DATA_MEMBER.DM_SERINUM);
        let DM_NAME = efetion.getDataProp(child, DATA_MEMBER.DM_NAME);
        let DM_SEX = efetion.getDataProp(child, DATA_MEMBER.DM_SEX);
        // let DM_SEX= efetion.getDataProp(child, DATA_MEMBER.DM_SEX);
        let DM_MOBILE_PHONE = efetion.getDataProp(child, DATA_MEMBER.DM_MOBILE_PHONE);
        let DM_PGMUSERID = efetion.getDataProp(child, DATA_MEMBER.DM_PGMUSERID);
        // let DM_EMAIL = efetion.getDataProp(child, DATA_MEMBER.DM_EMAIL);
        let DM_TITLE = efetion.getDataProp(child, DATA_MEMBER.DM_TITLE);
        let DM_DEPART = efetion.getDataProp(child, DATA_MEMBER.DM_DEPART);
        let DM_EMAIL = efetion.getDataProp(child, DATA_MEMBER.DM_EMAIL);
        let DM_PIN_YIN = efetion.getDataProp(child, DATA_MEMBER.DM_PIN_YIN);
        let DM_DEPARTID = efetion.getDataProp(child, DATA_MEMBER.DM_DEPARTID);
        let DM_VERSION = efetion.getDataProp(child, DATA_MEMBER.DM_VERSION);
        let DM_EMPVSERSION = efetion.getDataProp(child, DATA_MEMBER.DM_EMPVSERSION);


        peopleArr.push({
            id: DM_SERINUM,
            sip_id: sip_id,
            parentId: departId,
            name:DM_NAME,
            DM_SEX,
            mobile:DM_MOBILE_PHONE,
            depart:DM_DEPART,
      //      portrait: efetion.getPortraitBySipIDCRC(DM_SERINUM) || defaultPortrait,
            email:DM_EMAIL,
            pgmUserId:DM_PGMUSERID,
            title:DM_TITLE,
            pinYin:DM_PIN_YIN,
     //       avatar: path,
            version:DM_VERSION,
            empVersion:DM_EMPVSERSION
        });

    }
    return peopleArr;
}

function getDepartArray(count, root) {
    var messageArr = [];
    // 部门id
    let parentId = efetion.getDataProp(root, DATA_MEMBER.DM_SERINUM);
    for (let i = 0; i < count; i++) {
        let child = efetion.getDataChild(root, i);
        // 部门id
        let DM_SERINUM = efetion.getDataProp(child, DATA_MEMBER.DM_SERINUM);
        let DM_EMPVSERSION = efetion.getDataProp(child, DATA_MEMBER.DM_EMPVSERSION);
        // 部门名称
        let DM_NAME = efetion.getDataProp(child, DATA_MEMBER.DM_NAME);
        //企业通讯录版本号
        let DM_VERSION = efetion.getDataProp(child, DATA_MEMBER.DM_VERSION);
     //   let DM_DEPART = efetion.getDataProp(child, DATA_MEMBER.DM_VERSION);
        //是否是叶子节点
        let DM_SEX = efetion.getDataProp(child, DATA_MEMBER.DM_SEX);
    //    let DM_TITLE = efetion.getDataProp(child, DATA_MEMBER.DM_TITLE);
        // if (DM_SEX !== 0) {
        if (DM_SEX === 0) {
            return;
        }
        messageArr.push({
            departId: DM_SERINUM,
            departVersion: DM_VERSION,
            isLeaf: DM_SEX,
            empVersion: DM_EMPVSERSION,
            parentId: parentId,
            name: DM_NAME,
     //       num: num,
     //       isSelectAll: false
        });
    }

    return messageArr;
}

function onSearch(json, err) {
    const value = json.para4;
    if(err) {

        SearchCallbacks[value.toString()]([], err);
        delete SearchCallbacks[value.toString()];
        return;
    }
    var peopleIDsArr = [];
    if(json.para2) {
        peopleIDsArr = json.para2.split("#");
    }

    var root = efetion.findRootData(json.para3);
    var k = efetion.getChildSize(root);
    var peopleArr = [];
    if(k > 0) {
        for (var i = 0; i < k; i++) {
            var child = efetion.getDataChild(root, i);
            //PGM用户ID
            var DM_PGMUSERID = efetion.getDataProp(child, DATA_MEMBER.DM_PGMUSERID);
            //姓名
            var DM_NAME = efetion.getDataProp(child, DATA_MEMBER.DM_NAME);
            //职位
            var DM_TITLE = efetion.getDataProp(child, DATA_MEMBER.DM_TITLE);
            //手机号码
            var DM_MOBILE_PHONE = efetion.getDataProp(child, DATA_MEMBER.DM_MOBILE_PHONE);
            //sipID
            var DM_ID = efetion.getDataProp(child, DATA_MEMBER.DM_ID);
            //头像
        //    var path = portraitService.getPortratiBySipID(DM_ID);
            peopleArr.push({
                pgmId:DM_PGMUSERID,
                name:DM_NAME,
                title:DM_TITLE,
                mobile:DM_MOBILE_PHONE,
         //       avatar: path
            });
        }
    }
    SearchCallbacks[value.toString()](peopleArr);
    delete SearchCallbacks[value.toString()];
}

function onPgmSearch(json, err) {
	const value = json.para4;
    if(err) {
        SearchCallbacks[value]([], err);
        delete SearchCallbacks[value];
        return;
    }
    var peopleIDsArr = [];
	console.log("get info from " + json.para3);
    var root = efetion.findRootData(json.para2);
    var k = efetion.getChildSize(root);
    var peopleArr = [];
    if(k > 0) {
        for (var i = 0; i < k; i++) {
            var child = efetion.getDataChild(root, i);
            //PGM用户ID
            var DM_PGMUSERID = efetion.getDataProp(child, DATA_MEMBER.DM_PGMUSERID);
            //姓名
            var DM_NAME = efetion.getDataProp(child, DATA_MEMBER.DM_NAME);
            //职位
            var DM_TITLE = efetion.getDataProp(child, DATA_MEMBER.DM_TITLE);
            //手机号码
            var DM_MOBILE_PHONE = efetion.getDataProp(child, DATA_MEMBER.DM_MOBILE_PHONE);
            //sipID
            var DM_ID = efetion.getDataProp(child, DATA_MEMBER.DM_ID);
            //头像
        //    var path = portraitService.getPortratiBySipID(DM_ID);
            peopleArr.push({
                pgmId:DM_PGMUSERID,
                name:DM_NAME,
                title:DM_TITLE,
                mobile:DM_MOBILE_PHONE,
         //       avatar: path
            });
        }
    }
    SearchCallbacks[value.toString()](peopleArr);
    delete SearchCallbacks[value.toString()];
}


/**
 * 初始化企业通讯录参数
 * @param url 服务地址
 * @param eid 企业id
 * @param uid 用户id
 */
exports.initEnterpriseBook = function(url, portraitUrl, eid, uid, userId) {
    efetion.WriteProfile(ProfileType.APP_RUNNING, "NAV", "Public_enterpriselist_url", url);
    efetion.WriteProfile(ProfileType.APP_RUNNING, "NAV", "Per_Eid", eid);
    efetion.WriteProfile(ProfileType.APP_RUNNING, "NAV", "Per_Uid", uid);
    efetion.WriteProfile(ProfileType.APP_RUNNING, "NAV", "Public_download_protrait", portraitUrl);

    efetion.WriteProfile(ProfileType.APP_RUNNING, "reg_infor", "reg_id", userId);


    // 初始化数据库
    const cmd = efetion.encodeCmdLine("initdb", "", userId);
    efetion.InvokeSession("CWorkEnterpriseBook:", 1, cmd, 1);

};

/**
 * 全量下载通讯录，应该只需要登录时调用一次
 * @param callback 异步回调下载结果
 */
exports.download = function (callback) {
    cbDownload = callback;
// 调用下载企业通讯录接口
    const cmd1 = efetion.encodeCmdLine("WP_Get", "");
    efetion.InvokeSession("CWorkEnterpriseBook:", 1, cmd1, 1);

};

exports.getCorpsInfo = function () {
	var root = efetion.findRootData("CDataEnterprise:CorpInfo");
	var corpName = efetion.getDataProp(root, DATA_MEMBER.DM_NAME);
	
	console.log(corpName);
}

/**
 * 获取部门信息，子部门或部门联系人
 * 由于node只是临时版本且不能支持回调方式取得结果，
 * 所以采用临时方案，一个部门id同时只能有一个回调
 * 若两个地方同时等待同一个部门展开则会丢失一个回调，只有后设置的回调
 * 系统响应不会很慢，操作到同一个部门的情况本身很少，这种情况应该很少出现
 *
 * @param id 部门id
 * @param isLeaf  1/0，是否叶子节点，部门下是联系人
 * @param departVersion 部门版本号
 * @param empVersion 部门联系人版本号
 * @param callback 回调，
 */
exports.getDepart = function (id, isLeaf, departVersion, empVersion, callback) {

    // 如果是根节点
    if(id == 0) {
        var root = efetion.findRootData("CDataEnterprise:");
        var com = efetion.getDataChild(root, 0);
        var count = efetion.getChildSize(com);
        const isLeaf = efetion.getDataProp(com, DATA_MEMBER.DM_SEX);
        var departData = [];
        if(isLeaf) {
            departData = getPeopleArray(count, com);
        } else {
            departData = getDepartArray(count, com);
        }
        callback(departData);
        return;
    }

    // 叶子部门需要判断是否人员为空，为空时下载人员。
    // 其他情况用版本号获取更新，恢复部门数据
    if(isLeaf && (empVersion == 0 || empVersion == 1)){
        var cmd = efetion.encodeCmdLine('downloadEmps', "", id, departVersion, empVersion);
    }else{
        var cmd = efetion.encodeCmdLine("updateDepart", "", isLeaf, item.id, item.DM_VERSION, item.DM_EMPVSERSION);
    }
    var random = id.toString(); //getCmdId().toString();
    DepartCallbacks[random] = callback;
    DepartIsLeaf[random] = isLeaf;
    efetion.InvokeSession("CWorkEnterpriseBook:" + random, 1, cmd, 1);
};

/**
 * 获取根节点的子节点，一级部门
 */
exports.getRoot = function () {

    var root = efetion.findRootData("CDataEnterprise:");
    var com = efetion.getDataChild(root, 0);
    var count = efetion.getChildSize(com);
    const isLeaf = efetion.getDataProp(com, DATA_MEMBER.DM_SEX);
    var departData = [];
    if (isLeaf) {
        departData = getPeopleArray(count, com);
    } else {
        departData = getDepartArray(count, com);
    }

    return departData;
};

/**
 * 云端搜索通讯录
 * @param value 搜索关键字
 */
exports.search = function(value, callback) {
    SearchCallbacks[value.toString()] = callback;

    // 云端搜索
    var cmd = efetion.encodeCmdLine("WM_Search_Employees", "", "1", value);
    efetion.InvokeSession("CWorkPrivInfor:", 1, cmd, 1);
};

exports.searchContinue = function (peopleIDsArr, callback) {
    SearchCallbacks[peopleIDsArr.toString()] = callback;
    var cmd = efetion.encodeCmdLine("WM_Search_Employees", "", "0", peopleIDsArr);
    efetion.InvokeSession("CWorkPrivInfor:", 1, cmd, 1);
};

/**
 * PGM搜索通讯录
 * @param value 搜索关键字PGMUSERID
 */
exports.searchByPgm = function(value, callback) {
    SearchCallbacks[value.toString()] = callback;

    // pgmuserID搜索
    var cmd = efetion.encodeCmdLine("WP_PGMSEARCH", "", "562691113", value);//562691113(有效ID) 562691112（无效ID）
    efetion.InvokeSession(value, 1, cmd, 1);
};

/**
 * PGM搜索通讯录
 * @param value 搜索关键字PGMUSERID
 */
exports.getUserInfo = function() {

    var userInfo = efetion.getUserInfo();
    console.log(userInfo);
};
