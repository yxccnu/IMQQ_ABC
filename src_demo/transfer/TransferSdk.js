/**
 * Created by Administrator on 2017/5/2.
 */

const TransferSdkNode = require("../../Windows/sdk/TransferSdk.node").TransferSdk;
var sdk = new TransferSdkNode();

sdk.initSDKTransfer();
/*
 * 初始化
 */
exports.initSDKTransfer = function () {
	sdk.initSDKTransfer();
};

/*
 * 生成上传文件对象
 * path 文件路径（必须存在）
 * type 文件保存方式 
 * shareIds 分享成员id列表
 * shareLen 分享成员id列表的个数
 */
exports.buildUploadFile = function (path, type, shareIds) {
	console.log("生成上传文件对象了");

	var file = sdk.buildUploadFile(path, type, shareIds);
	
	console.log(file);
	
	return file;
};

/*
 * 文件上传
 * onProg	传送中的进度 = function(path, progress) { 文件path传输的进度是progress<0-100>; }
 * onResult	传送结果 = function (json) { }
 */
 exports.uploadFile = function (path, type, shareIds, onProg, onResult) {
	 console.log("要上传文件了");
	 sdk.uploadFile(path, type, shareIds, onProg, onResult);
 }
 
 /*
 * 内存文件上传 (该接口应该不能用) 
 * useless	标识
 * data		内存数据块
 * size		内存数据块大小
 * file		文件描述 （忽略path)
 * onProg	传送中的进度 （如果为空，不回调下载进度）
 * onResult	传送结果
 */
 exports.uploadMemory = function (data, size, file, onProg, onResult) {
	 console.log("要上传内存文件咯");
	 
	 sdk.uploadMemory(data, size, file, onProg, onResult);
 }
 
 /*
 * 文件下载
 * fileId 文件id
 * fileName 文件名
 * fileSize 文件大小
 * onProg	传送中的进度 = function(path, progress) { 文件path传输的进度是progress<0-100>; }
 * onResult	传送结果 = function (json) { }
 */
 exports.downloadFile = function (fileId, fileName, fileSize, dir, onProg, OnResult) {
	 console.log("下载文件啊");
	 sdk.downloadFile(fileId, fileName, fileSize, dir, onProg, OnResult);
 }
 
 /*
 * 读取本地缓存文件
 */
 exports.fileById = function (fileId, fileName, fileSize, dir, onResult) {
	 console.log("读取本地缓存文件");
	 sdk.fileById(fileId, fileName, fileSize, dir, onResult);
 }
 
 /*
 * Cache读取小图片缩略图，
 * 如果Cache不存在，自动读取文件，如果文件不存在，自动从服务器下载
 * thumbId      缩略图的id
 * thumbSize    缩略图的大小
 * onTrying     回调函数 = function (thumbId) { 正在从服务器下载thumbId缩略图... };
 * onResult     回调函数 = function (thumbId, path) { 缩略图thumbId保存的文件路径是path; };
 */
 exports.fastThumbById = function (thumbId, thumbSize, onTrying, onResult) {
	 console.log("Cache读取小图片缩略图");
	 sdk.fastThumbById(thumbId, thumbSize, onTrying, onResult);
 }
 
 /*
 * 通过fileId生成本地cache的文件路径
 */
 exports.pathByThumbId = function (thumbId) {
	 console.log("通过fileId生成本地cache的文件路径");
	 sdk.pathByThumbId(thumbId);
 }
 
 /*
 * 通过fileId或文件名生成本地cache的文件路径
 */
 exports.pathByThumbId = function (thumbId) {
	 console.log("通过fileId生成本地cache的文件路径");
	 sdk.pathByThumbId(thumbId);
 }
 
 /*
 * 通过fileId或文件名生成本地cache的文件路径
 */
 exports.pathByFileIdOrName = function (fileId, fileName) {
	 console.log("通过fileId或文件名生成本地cache的文件路径");
	 sdk.pathByFileIdOrName(fileId, fileName);
 }
 
 /*
 * 文件id转为url
 */
 exports.fileId2Url = function (msgId, fileId, fileSize, thumbId, thumbSize, onResult) {
	 console.log("文件id转为url");
	 sdk.fileId2Url(msgId, fileId, fileSize, thumbId, thumbSize, onResult);
 }
 
 /*
 * 取消文件上传
 * fileId 传入文件id
 */
exports.cancelUploadFile = function (fileId) {
	 console.log("取消文件上传");
	 sdk.cancelUploadFile (fileId);
 }
 
/*
* 取消文件下载
* fileId 传入文件id
*/
exports.cancelDownloadFile = function (fileId) {
	 console.log("取消文件下载");
	 sdk.cancelDownloadFile (fileId);
 }

/*
* 文件传输的选项 (http还是cin) 默认是cin
* SDKTO_HttpTransfer = 0x01
*/
exports.setTransferOption = function (opt) {
    sdk.setTransferOption (opt);
}

/*
* 从服务器下载文件列表
*
* @peer 会话ID（二人、群、讨论组ID）
* @fileName 搜索的文件名，如果搜索全部文件，传空字符串
* @page 分页（从1开始）
* @pageSize 分页大小（如果查所有记录，可以传一个很大的值）
*
* @onResult function(result) result 格式：{"fileList":[{"fileId":"06FD3B23A63CB474ABB5B23B5E59CFD9","fileName":"示例图片_01.jpg","fileSize":97609,"from":100024888,"originId":"","originSize":0,"peer":100024888,"thumbId":"","thumbSize":0,"time":1568533563,"to":100011867}],"suc":true}
*/
exports.getFileListFromServer = function (peer, fileName, page, pageSize, onResult) {
    console.log("getFileListFromServer");
    sdk.getFileListFromServer(peer, fileName, page, pageSize, onResult);
}
 
 
 
 
 
 
 
 
 
 
 
