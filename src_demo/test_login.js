/**
 * Created by Administrator on 2017/5/12.
 */

// +8613100131000 lkx123456 bbbb 500
// unitest1 +8613552487735 lkx123456 bbbb 500
var mId = "13100000007"; //"+8613223068960";//"+8613552487735";//"+8613180211792";;  "+8615810371507", 8618701470889 8618842651812 8613552487735 8615210892607
mPw = "abcd1234";//"xinmei123";//"lkx123456"; //"aaaa1111",                          qqqq1111              lkx123456

mChannel = "10000";

setParameter();
baseSdk.appDoInit(onChanged, null);
addListener();

function onChanged(appState) {
    console.log("onChanged Called!");
    console.log(JSON.stringify(appState));

    switch (appState.now) {
        case AppState.APS_UNLOGINED:
            if (appState.prev == AppState.APS_LOGINING) {
                console.log("登录失败!");
            }
            else {
                // showInfo("APS_UNLOGINED");
                // addListener ();
                // baseSdk.appLogin(mId, mPw, mChannel, 1, 1);     // 登录
                //SdkBase.thirdAppLogin(1048576, new String ("qwioeoqwe").getBytes(), "qwerwe", "2");
            }
            break;
        case AppState.APS_LOGINING:
            console.log ("APS_LOGINING");
            break;
        case AppState.APS_LOGINED_WITHOUT_NET:
            console.log ("APS_LOGINED_WITHOUT_NET");
            break;
        case AppState.APS_INITIALIZING:
            console.log ("APS_INITIALIZING");
            showHistoryAccounts ();
            break;
        case AppState.APS_ACTIVE_USER_WITH_NET:
            console.log ("APS_ACTIVE_USER_WITH_NET");
            break;
        case AppState.APS_INITIALIZED:
            console.log ("APS_INITIALIZED");
            break;
        case AppState.APS_LOGINED_WITH_NET:                              // 登录后链接cmp成功，开始测试
            msgSdk.doRecvMessage();
            break;
    }

}

function test() {
   // setParameter();
    console.log("go");
    baseSdk.appLogin(mId, mPw, mChannel, 1, 1);     // 登录
}

function appLogout() {
	console.log("退出登录");
	baseSdk.appLogout();
}



function setParameter() {
    //baseSdk.setSdkParam(CmdAppParams.CAP_NavAddr, "10.10.206.193:8084");
    //baseSdk.setSdkParam(CmdAppParams.CAP_AcpAddr, "10.10.206.193:8086");

    //baseSdk.setSdkParam(CmdAppParams.CAP_NavAddr, "124.42.103.254:8084");
    //baseSdk.setSdkParam(CmdAppParams.CAP_AcpAddr, "124.42.103.254:8086");

//    baseSdk.setSdkParam(CmdAppParams.CAP_NavAddr, "124.42.103.185:8084");
//    baseSdk.setSdkParam(CmdAppParams.CAP_AcpAddr, "124.42.103.185:8086");

    // baseSdk.setSdkParam(CmdAppParams.CAP_NavAddr, "47.91.75.52:8084");
    // baseSdk.setSdkParam(CmdAppParams.CAP_AcpAddr, "47.91.75.52:8086");

    //民生测试环境
    // baseSdk.setSdkParam(CmdAppParams.CAP_NavAddr, "111.205.207.148:8084");
    // baseSdk.setSdkParam(CmdAppParams.CAP_AcpAddr, "111.205.207.148:8086");

    //基础环境
    baseSdk.setSdkParam(CmdAppParams.CAP_NavAddr, "10.230.135.74:8084");
    baseSdk.setSdkParam(CmdAppParams.CAP_AcpAddr, "10.230.135.74:8086");

     //baseSdk.setSdkParam(CmdAppParams.CAP_NavAddr, "nav.eutalker.com:8084");
     //baseSdk.setSdkParam(CmdAppParams.CAP_AcpAddr, "acp.eutalker.com:8086");

     //baseSdk.setSdkParam(CmdAppParams.CAP_NavAddr, "197.1.25.232:8084");
     //baseSdk.setSdkParam(CmdAppParams.CAP_AcpAddr, "197.1.25.232:8086");
    //baseSdk.setSdkParam(CmdAppParams.CAP_NavAddr, "10.10.202.104:8084");
    //baseSdk.setSdkParam(CmdAppParams.CAP_AcpAddr, "10.10.202.104:8086");

    baseSdk.setSdkParam(CmdAppParams.CAP_KEEP_LIVE, "1");
    //baseSdk.setSdkParam(CmdAppParams.CAP_Version, "4.1.0029");
    // baseSdk.setSdkParam(CmdAppParams.CAP_Version, "1.0.0000");
    baseSdk.setSdkParam(CmdAppParams.CAP_Version, "3.0.0");
    baseSdk.setSdkParam(CmdAppParams.CAP_CVAddr, "124.42.103.185:9017");
}

function onNotifyLoginFailed(json) {
    console.log(json);
}
function onNotifyNewAppVersion(json) {
    console.log(json);
}
function onNotifyLogined(json) {
    console.log(json);
}

function addListener() {
    baseSdk.addSDKListener(BaseListenerType.NOTIFY_LOGIN_FAILED, onNotifyLoginFailed);
    baseSdk.addSDKListener(BaseListenerType.NOTIFY_NEWAPP_VERSION, onNotifyNewAppVersion);
    baseSdk.addSDKListener(BaseListenerType.NOTIFY_LOGINED, onNotifyLogined);
    baseSdk.addSDKListener(BaseListenerType.NOTIFY_KICKOFF, function (json) {
        console.log(json);
    });
    baseSdk.addSDKListener(BaseListenerType.NOTIFY_LOGOUT, function (json) {
        console.log(json);
    });
    baseSdk.addSDKListener(BaseListenerType.NOTIFY_QRCODE_FOR_LOGIN, function (json) {
        console.log("登录二维码");
        console.log(json);
    });
    baseSdk.addSDKListener(BaseListenerType.NOTIFY_DONT_DISTURB_CHANGED, function (json) {
        console.log(json);
    });
}


function showHistoryAccounts() {
    baseSdk.allAccounts(function (json) {
        console.log(JSON.stringify(json));
    });
}

// {"id":"+8613180211792","pw":"lkx123456","state":1,"tmStart":1493369489,"tmEnd":-858993460,"autoLogin":1,"portrait":"","uid":625892642}
//  625892642

function delAccount() {
    baseSdk.deleteAccount(625892642);
}

function onSdkParam(json) {
    switch (json.name){
        case CmdAppParams.CAP_NavAddr:
            console.log("nav:", json.value);
            break;
        case CmdAppParams.CAP_AcpAddr:
            console.log("acp:", json.value);
            break;
        default:
            console.log(JSON.stringify(json));
            break;
    }
}
var token;
function onToken(json) {
    console.log(JSON.stringify(json));
    token = json.value;
}
function getSdkParam() {
    console.log("uid:", baseSdk.getAppUserId());
    baseSdk.getSdkParam(CmdAppParams.CAP_AcpAddr,onSdkParam);
    baseSdk.getSdkParam(CmdAppParams.CAP_NavAddr, onSdkParam);
    baseSdk.getSdkParam(CmdAppParams.CAP_USER_ID, onSdkParam);
    baseSdk.getSdkParam(CmdAppParams.CAP_NAV_EnterpriseUrl, onSdkParam);
    baseSdk.getSdkParam(CmdAppParams.CAP_NAV_EnterprisePortraitUrl, onSdkParam);
    baseSdk.getSdkParam(CmdAppParams.CAP_NAV_RongAppkey, onSdkParam);
    baseSdk.getSdkParam(CmdAppParams.CAP_NAV_RongUrl, onSdkParam);
}

function getToken() {
    baseSdk.getSdkParam(CmdAppParams.CAP_RONG_TOKEN, onToken);
}

function QRCodeLogin() {
    baseSdk.QRCodeLogin("2");
}

function QRCodeCancelLogin() {
    baseSdk.QRCodeCancelLogin();
}

function testSetDontDisturb() {
    baseSdk.setDontDisturb(baseSdk.getAppUserId(), 1, function (suc) {
        console.log("setDontDisturb " + suc);
    });
}

function testGetDontDisturb() {
    baseSdk.getDontDisturb(baseSdk.getAppUserId(), function (set) {
        console.log("getDontDisturb " + set);
    });
}

function testCheckVersion() {
    baseSdk.checkVersion("13444443009", function (result, downloadUrl, detailPageUrl) {
        switch (result) {
            case 1:
                console.log("OK");
                break;
            case 2:
                console.log("强制升级");
                break;
            case 3:
                console.log("错误");
                break;
        }
        console.log("checkVersion " + downloadUrl + " " + detailPageUrl);
    });
}

function testSetMixVolume() {
    baseSdk.setMixVolume(90);
}