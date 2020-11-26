/**
 * Created by Administrator on 2017/6/7.
 */

 /**
 * 配置类型
 * @type {{APP_CONFIGURE: number, RUNTIME_CONFIGURE: number, USER_CONFIGURE: number, PSWD_CONFIGURE: number, APP_RUNNING: number}}
 */
var ProfileType = {
    APP_CONFIGURE:1,
    RUNTIME_CONFIGURE:2,
    USER_CONFIGURE:3,
    PSWD_CONFIGURE:4,
    APP_RUNNING:5,
};
exports.ProfileType = ProfileType;

var DATA_MEMBER = {
    DM_PGMUSERID: 1, //PGM用户ID
    DM_ID: 2, //sipID
    DM_SERINUM: 3,
    DM_VERSION: 4, //企业通讯录版本号
    DM_DETAILVERSION: 5, //人员详细版本号
    DM_EMPVSERSION: 6, //人员版本号
    DM_NAME: 11,
    DM_SEX: 13, // 是否是叶子部门
    DM_DEPARTID: 23, // 部门编号 个人信息 ，
    DM_DEPART: 24, //部门名称  个人信息 ，
    DM_TITLE: 25, //职位
    DM_MOBILE_PHONE: 53, //手机号码
    DM_EMAIL: 64, //邮箱
    DM_IS_DETAIL_DOWNLOADEDE: 84, //是否具有权限
    DM_PATH_ID: 101,
    DM_PIN_YIN: 104,
    //   包版本
    pakageVer: 0
}
exports.DATA_MEMBER = DATA_MEMBER;
