/**
 * Created by Administrator on 2017/5/12.
 */


//var path = "C:\\Users\\Administrator\\AppData\\Roaming\\cakeData\\661153819\\portraits\\qweiurwerw";
var path = "c:\\login.jpg";
//var path = "C:\Users\Administrator\AppData\Roaming\cakeData\661153819\portraits\qweiurwerw";
var type = 0;//FileUploadType.FUT_NON_PERSIST;
var shareIds = [965377971,764582194];
var file;

var data = "123456";
var size = 7;

var fileId = "33555C4E161AFEA4A83881F4C1DA0CBD_IMAGE";//8C8241F8D90D11740A4F1B2B899CA30A
var fileName = "login.jpg";
var fileSize = 175123;
var dir = "";

var thumbId = "qweiurwerw";
var thumbSize = 1;

var msgId = "0";//传空值即可
var peer = 100011867;

//transferSdk.setTransferOption(1);

function initSDKTransfer() {
	console.log("文件传输初始化...");
	transferSdk.initSDKTransfer();
}

function buildUploadFile() {//测试通过
	console.log("生成上传文件对象");
	file = transferSdk.buildUploadFile(path, type, shareIds);
	
	console.log(file);
}

function onProg(token, prog) {
	console.log(token + " prog:" + prog);
}

function onTrying (json) {
	console.log("onTrying");
	console.log(json);
}

function onResult(aboutFile) {
	console.log(aboutFile);
	//var jsonFileResult = JSON.parse(aboutFile);//这么打印会出问题的，不晓得为啥。
}

function uploadFile() {//file, onProg, onResult
    console.log("上传文件");
    // transferSdk.uploadFile(path, type, [], onProg, function (json) {
    //     console.log(json);
    // });//调整接口，原来的file对象替换为path, type, shareIds三个参数

    transferSdk.uploadFile("c:\\login.jpg", type, [], onProg, function (json) {
        console.log(json);
    });//调整接口，原来的file对象替换为path, type, shareIds三个参数
}
function uploadMemory () {
	console.log("内存文件上传");
	
	transferSdk.uploadMemory(data, size, file, onProg, onResult);
}

function downloadFile () {
	console.log("文件下载");
	transferSdk.downloadFile(fileId, fileName, fileSize, dir, onProg, onResult);
}

function fileById () {
	console.log("读取本地缓存文件");
	transferSdk.fileById(fileId, fileName, fileSize, dir, onResult);
}

function fastThumbById () {
	console.log("Cache读取小图片缩略图");
	transferSdk.fastThumbById(thumbId, thumbSize, onTrying, onResult);
}

function pathByThumbId () {
	console.log("通过fileId生成本地cache的文件路径");
	console.log(transferSdk.pathByThumbId(thumbId));//测试通过，返回值不正确
}

function pathByFileIdOrName () {
	console.log("通过fileId或文件名生成本地cache的文件路径");
	console.log(transferSdk.pathByFileIdOrName(fileId, fileName));
}

function fileId2Url () {//测试通过
	console.log("fileId2Url");
	console.log(transferSdk.fileId2Url(msgId, fileId, fileSize, thumbId, thumbSize, onResult));
}

function cancelUploadFile () {
	console.log("取消文件上传" + fileId);
	transferSdk.cancelUploadFile(fileId);
}

function cancelDownloadFile () {
	console.log("取消文件下载" + fileId);
	transferSdk.cancelDownloadFile(fileId);
}

function getFileListFromServer () {
    console.log("getFileListFromServer");
    transferSdk.getFileListFromServer(peer, "", 1, 100, function (result) {
        console.log(JSON.stringify(result));
    });
}


