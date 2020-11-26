/**
 * Created by Administrator on 2017/5/17.
 */

const DataMigrationSdk = require("../../Windows/sdk/DataMigrationSdk.node").DataMigrationSdk;
var sdk = new DataMigrationSdk();

/*
 * 是否需要数据迁移 (该函数必须在登录成功后调用) 
 * @param appName	(string) 被迁移app的名称 (数据根目录的名称) 
 * @param callback	function (isNeed, path) { if (isNeed) { doDataMigration (path); }
 */
exports.isNeedMigration = function (appName, callback) {
    sdk.isNeedMigration (appName, callback);
};

/*
 * 作数据迁移 (该函数必须在登录成功后调用) 
 * @param path	    (string) 迁移db的文件路径 由isNeedMigration()函数的callback 返回
 * @param callback	function (suc) { if (suc) { ; }
 */
exports.doDataMigration = function (path, callback) {
    sdk.doDataMigration (path, callback);
};