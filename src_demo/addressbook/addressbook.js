/**
 * Created by xiaohaitao on 2017/6/29.
 */

const CakeSdk = require("../../Windows/sdk/cake_sdk_v6.node");
//
var sdk;


/**
 * 初始化
 */
exports.init = function () {
    console.log("addressbook init.")
    if (!sdk) {
        console.log("sdk init begin...");
        //
        sdk = new CakeSdk.RcsSdk(
            1     //log_level
            , ''   //scriptPath
            , ''  //product version
            , 3   //mode
            , ''  //sdkLogPath
            , ''  //storagePath
        );
        if (sdk) {
            console.log("sdk Set user info begin...");
            sdk.setUserInfo("{loginId:'huhaitian'}", function (data) {
                console.log(data)
            });
            sdk.setAddressbookConfig("" +
                "{" +
                "sys:'moa', " +
                "baseUrl:'http://111.205.207.148:3520/ekp12', " +
                "readCacheFile:false," +
                "writeCacheFile:true," +
                "}",
                function (data) {
                console.log(data)
            });
        }
        console.log("sdk init end...");
    }
};

/**
 * 根据部门ID获取子部门列表
 */
exports.getDepartment = function () {
    console.log("getDepartment begin.");
    if (!sdk) {
        console.log("sdk is null.");
        return;
    }

    sdk.getDepartmentList("{pid:'CMBC'}", function (data) {
        console.log('getDepartmentList callback');
        console.log(data);
        if(data.bSucc){
            console.log("success. the result is %s", data.desc)
        }else{
            console.log("failed. The error code is %s, and the error message is %s", data.code, data.desc)
        }
    })
};

/**
 * 模糊查询部门
 */
exports.searchDepartment = function () {
    console.log("searchDepartment begin.");
    if (!sdk) {
        console.log("sdk is null.");
        return;
    }

    sdk.searchDepartment("{keyword:'北京'}", function (data) {
        console.log('searchDepartment callback');
        console.log(data);
        if(data.bSucc){
            console.log("success. the result is %s", data.desc)
        }else{
            console.log("failed. The error code is %s, and the error message is %s", data.code, data.desc)
        }
    })
};

/**
 * 递归查询父部门
 */
exports.getParentDepartment = function () {
    console.log("getParentDepartment begin.");
    if (!sdk) {
        console.log("sdk is null.");
        return;
    }

    sdk.getParentDepartment("{id:'HQT0000054'}", function (data) {
        console.log('getParentDepartment callback');
        console.log(data);
        if(data.bSucc){
            console.log("success. the result is %s", data.desc)
        }else{
            console.log("failed. The error code is %s, and the error message is %s", data.code, data.desc)
        }
    })
};

/**
 * 模糊查询职务
 */
exports.searchJob = function () {
    console.log("searchJob begin.");
    if (!sdk) {
        console.log("sdk is null.");
        return;
    }

    sdk.searchJob("{keyword:'行长'}", function (data) {
        console.log('searchJob callback');
        console.log(data);
        if(data.bSucc){
            console.log("success. the result is %s", data.desc)
        }else{
            console.log("failed. The error code is %s, and the error message is %s", data.code, data.desc)
        }
    })
};

/**
 * 模糊查询人员列表
 */
exports.searchEmployee = function () {
    console.log("searchEmployee begin.");
    if (!sdk) {
        console.log("sdk is null.");
        return;
    }

    sdk.searchEmployee("{keyword:'liuyaling'}", function (data) {
        console.log('searchEmployee callback');
        console.log(data);
        if(data.bSucc){
            console.log("success. the result is %s", data.desc)
        }else{
            console.log("failed. The error code is %s, and the error message is %s", data.code, data.desc)
        }
    })
};

/**
 * 查询人员详细信息
 */
exports.getEmployeeDetails = function () {
    console.log("getEmployeeDetails begin.");
    if (!sdk) {
        console.log("sdk is null.");
        return;
    }

    sdk.getEmployeeDetails("{uid:'liuyaling'}", function (data) {
        console.log('getEmployeeDetails callback');
        console.log(data);
        if(data.bSucc){
            console.log("success. the result is %s", data.desc)
        }else{
            console.log("failed. The error code is %s, and the error message is %s", data.code, data.desc)
        }
    })
};

/**
 * 获取指定部门的所有员工
 */
exports.getAllEmployee = function () {
    console.log("getAllEmployee begin.");
    if (!sdk) {
        console.log("sdk is null.");
        return;
    }

    sdk.getAllEmployee("{deptId:'HQT0000703', start:0, end:10}", function (data) {
        console.log('getAllEmployee callback');
        console.log(data);
        if(data.bSucc){
            console.log("success. the result is %s", data.desc)
        }else{
            console.log("failed. The error code is %s, and the error message is %s", data.code, data.desc)
        }
    })
};

/**
 * 获取常用联系人
 */
exports.getCommonContacts = function () {
    console.log("getCommonContacts begin.");
    if (!sdk) {
        console.log("sdk is null.");
        return;
    }

    sdk.getCommonContacts("{uid:'zhangyu52'}", function (data) {
        console.log('getCommonContacts callback');
        console.log(data);
        if(data.bSucc){
            console.log("success. the result is %s", data.desc)
        }else{
            console.log("failed. The error code is %s, and the error message is %s", data.code, data.desc)
        }
    })
};

/**
 * 新增常用联系人
 */
exports.addCommonContact = function () {
    console.log("addCommonContact begin.");
    if (!sdk) {
        console.log("sdk is null.");
        return;
    }

    sdk.addCommonContact("{uid:'zhangyu52', addId:'hongqi'}", function (data) {
        console.log('addCommonContact callback');
        console.log(data);
        if(data.bSucc){
            console.log("success. the result is %s", data.desc)
        }else{
            console.log("failed. The error code is %s, and the error message is %s", data.code, data.desc)
        }
    })
};


/**
 * 删除常用联系人
 */
exports.deleteCommonContact = function () {
    console.log("deleteCommonContact begin.");
    if (!sdk) {
        console.log("sdk is null.");
        return;
    }

    sdk.deleteCommonContact("{uid:'zhangyu52', delId:'duanqingshan'}", function (data) {
        console.log('deleteCommonContact callback');
        console.log(data);
        if(data.bSucc){
            console.log("success. the result is %s", data.desc)
        }else{
            console.log("failed. The error code is %s, and the error message is %s", data.code, data.desc)
        }
    })
};

