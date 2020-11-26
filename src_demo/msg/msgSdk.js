/**
 * Created by Administrator on 2017/5/2.
 */

const MsgSdkNode = require("../../Windows/sdk/MsgSdk.node").MsgSdk;
var sdk = new MsgSdkNode();

/**
 * 初始化
 */
exports.initSDKMsg = function() {
    sdk.initSDKMsg();
};

/**
 * 发文本消息
 * @param txt
 * @param peer  单发消息 peer=接收者id 群发消息 peer=[id1, id2,...]
 * @param isBurn 1 阅后即焚 0 普通消息
 * @param callback --> function (string msg-id, bool isSuc);
 */
exports.sendTextMessage = function(txt, peer, isBurn, callback) {
    sdk.sendTextMessage(txt, peer, isBurn, callback);
};

/**
 * 发附带@的文本消息
 * @param txt
 * @param peer  单发消息 peer=接收者id 群发消息 peer=[id1, id2,...]
 * @param at    需要@的人员id数组 [id1, id2, ...]
 * @param callback --> function (string msg-id, bool isSuc);
 */
exports.sendTextMessageWithAt = function(txt, peer, at, callback) {
    sdk.sendTextMessageWithAt(txt, peer, at, callback);
};

/**
 * 发图片消息
 * @param filePath      文件完整路径
 * @param thumbPath     缩略图完整路径
 * @param originPath    原图完整路径 (可以为null)
 * @param peer          单发消息 peer=接收者id 群发消息 peer=[id1, id2,...]
 * @param prog_callback 进度回调函数 --> function (string msg-id, int progress<进度 0-100>);
 * @param callback      结果回调函数 --> function (string msg-id, bool isSuc);
 */
exports.sendImageMessage = function(filePath, thumbPath, originPath, peer, prog_callback, callback) {
    sdk.sendImageMessage(filePath, thumbPath, originPath, peer, prog_callback, callback);
};

/**
 * 发视频消息
 * @param videoPath     视频文件完整路径
 * @param thumbPath     缩略图完整路径
 * @param peer          单发消息 peer=接收者id 群发消息 peer=[id1, id2,...]
 * @param prog_callback 进度回调函数 --> function (string msg-id, int progress<进度 0-100>);
 * @param callback      结果回调函数 --> function (string msg-id, bool isSuc);
 */
exports.sendVideoMessage = function(videoPath, thumbPath, peer, prog_callback, callback) {
    sdk.sendVideoMessage(videoPath, thumbPath, peer, prog_callback, callback);
};

/**
 * 发文件消息
 * @param filePath      文件路径
 * @param peer          单发消息 peer=接收者id 群发消息 peer=[id1, id2,...]
 * @param prog_callback 进度回调函数 --> function (string msg-id, int progress<进度 0-100>);
 * @param callback      结果回调函数 --> function (string msg-id, bool isSuc);
 */
exports.sendFileMessage = function(filePath, peer, prog_callback, callback) {
    sdk.sendFileMessage(filePath, peer, prog_callback, callback);
};

/**
 * 发文件消息
 * @param filePath      文件路径
 * @param duration      时长
 * @param bitrate       带宽 (0)
 * @param peer          单发消息 peer=接收者id 群发消息 peer=[id1, id2,...]
 * @param prog_callback 进度回调函数 --> function (string msg-id, int progress<进度 0-100>);
 * @param callback      结果回调函数 --> function (string msg-id, bool isSuc);
 */
exports.sendAudioMessage = function(filePath, duration, bitrate, peer, prog_callback, callback) {
    sdk.sendAudioMessage(filePath, duration, bitrate, peer, prog_callback, callback);
};

/**
 * 发名片消息
 * @param id        名片id
 * @param name      名称
 * @param phone     电话
 * @param depart    部门
 * @param portrait  头像
 * @param uri       uri
 * @param peer      单发消息 peer=接收者id 群发消息 peer=[id1, id2,...]
 * @param callback  结果回调函数 --> function (string msg-id, bool isSuc);
 */
exports.sendCardMessage = function(id, name, phone, depart, portrait, uri, peer, callback) {
    sdk.sendCardMessage(id, name, phone, depart, portrait, uri, peer, callback);
};

/**
 * 发视频消息
 * @param filePath      表情文件完整路径
 * @param thumbPath     缩略图完整路径
 * @param packId        表情标识符 (string)
 * @param width, height 表情宽\高 (int)
 * @param peer          单发消息 peer=接收者id 群发消息 peer=[id1, id2,...]
 * @param prog_callback 进度回调函数 --> function (string msg-id, int progress<进度 0-100>);
 * @param callback      结果回调函数 --> function (string msg-id, bool isSuc);
 */
exports.sendEmotionMessage = function(filePath, thumbPath, packId, width, height, peer, prog_callback, callback) {
    sdk.sendEmotionMessage(videoPath, thumbPath, peer, prog_callback, callback);
};

/**
 * 发富文本消息
 * @param filePath      图片文件完整路径数组 [path1, path2, ...]
 * @param thumbPath     缩略图完整路径数组 [thumb1, thumb2, ...]
 * @param content       文本消息
 * @param at            at的id列表 [id1, id2, ...]
 * @param peer          单发消息 peer=接收者id 群发消息 peer=[id1, id2,...]
 * @param prog_callback 进度回调函数 --> function (string msg-id, int progress<进度 0-100>);
 * @param callback      结果回调函数 --> function (string msg-id, bool isSuc);
 */
exports.sendRichTxtMessage = function(filePath, thumbPath, content, at, peer, prog_callback, callback) {
    sdk.sendRichTxtMessage(filePath, thumbPath, content, at, peer, prog_callback, callback);
};

/**
 * 发公共号图文分享消息
 * @param title         图文标题
 * @param description   图文内容描述
 * @param url           链接
 * @param platformName  公共号名称
 * @param imgPath       图片路径
 * @param msgId         分享的消息id
 * @param platformId    公共号id
 * @param imgtxtType    消息类型 PFIT_TXT = 0,PFIT_IMG = 1,PFIT_VIDEO = 2,PFIT_VOICE = 3,
 * @param peer          单发消息 peer=接收者id 群发消息 peer=[id1, id2,...]
 * @param prog_callback 进度回调函数 --> function (string msg-id, int progress<进度 0-100>);
 * @param callback      结果回调函数 --> function (string msg-id, bool isSuc);
 */
exports.sendPublicForwardMessage = function(
    title,
    description,
    url,
    platformName,
    imgPath,
    msgId,
    platformId,
    imgtxtType,
    peer,
    prog_callback,
    callback
) {
    sdk.sendPublicForwardMessage(
        title,
        description,
        url,
        platformName,
        imgPath,
        msgId,
        platformId,
        imgtxtType,
        peer,
        prog_callback,
        callback
    );
};

/**
 * 发公通用消息
 * @param title         图文标题
 * @param description   图文内容描述，数组类型
 * @param source        来源
 * @param url           链接
 * @param peer          单发消息 peer=接收者id 群发消息 peer=[id1, id2,...]
 * @param callback      结果回调函数 --> function (string msg-id, bool isSuc);
 */
exports.sendGeneralForwardMessage = function(title, descriptionList, source, url, peer, callback) {
    sdk.sendGeneralForwardMessage(title, descriptionList, source, url, peer, callback);
};

/**
 * 发链接分享消息
 * @param title (string)         标题
 * @param shareContent (string)  分享内容描述
 * @param url (string)           链接
 * @param shareFrom (string)     分享内容来源
 * @param imgPath (string)       图片路径
 * @param shareType (number)     分享类型 （2=分享链接  1=分享文件）
 * @param peer                   单发消息 peer=接收者id 群发消息 peer=[id1, id2,...]
 * @param prog_callback          进度回调函数 --> function (string msg-id, int progress<进度 0-100>);
 * @param callback               结果回调函数 --> function (string msg-id, bool isSuc);
 */
exports.sendOutLinkMessage = function(title, shareContent, url, shareFrom, imgPath, shareType, peer, prog_callback, callback) {
    sdk.sendOutLinkMessage(title, shareContent, url, shareFrom, imgPath, shareType, peer, prog_callback, callback);
};

/**
 * 发位置消息
 * @param imgPath       图片完整路径
 * @param description   位置描述
 * @param longtitude    经度
 * @param latitude      纬度
 * @param peer          单发消息 peer=接收者id 群发消息 peer=[id1, id2,...]
 * @param prog_callback 进度回调函数 --> function (string msg-id, int progress<进度 0-100>);
 * @param callback      结果回调函数 --> function (string msg-id, bool isSuc);
 */
exports.sendLocationMessage = function(imgPath, description, longtitude, latitude, peer, prog_callback, callback) {
    sdk.sendLocationMessage(imgPath, description, longtitude, latitude, peer, prog_callback, callback);
};

/**
 * 发送民生定义表情消息
 * @param type      1 图片表情 2 Gif表情
 * @param token     表情标识
 * @param name      表情名称
 * @param fileName  表情文件名
 * @param packageName表情包名
 * @param peer      单发消息 peer=接收者id 群发消息 peer=[id1, id2,...]
 * @param callback  结果回调函数 --> function (string msg-id, bool isSuc);
 */
exports.sendEmotion4MinShengMessage = function(type, token, name, fileName, packageName, peer, callback) {
    sdk.sendEmotion4MinShengMessage(type, token, name, fileName, packageName, peer, callback);
};

/*
 * 获取指定id的消息列表
 * @param peer      联系人（群组、公共号）id
 * @param offset    从第offset个消息开始取（时间由大到小）
 * @param limit     最多取limit个
 * @param callback  回调消息列表 （按时间由小到大）
 * json: 每一个消息对象的类型根据 MsgType 来区分
 {"limit":3,"msg-list":[{"content":{"txt":"消息测试 ... "},"from":359374414,"isAtMe":false,"isRead":false,"isReadReply":false,"isSend":true,"isSendFailed":false,"isSendSucc":true,"isSending":false,"isUndo":false,"localTime":1501208725000,"msgID":"8DC8C862DE1C2B848A456D1F8C703005","msgType":0,"peer":604772057,"sender":0,"sequence":1501208724592,"servTime":1501208724592,"to":604772057},{"content":{"txt":"消息测试 ... "},"from":359374414,"isAtMe":false,"isRead":false,"isReadReply":false,"isSend":true,"isSendFailed":false,"isSendSucc":true,"isSending":false,"isUndo":false,"localTime":1501208880000,"msgID":"E1AE239D99870D342B6EC8E19D213F80","msgType":0,"peer":604772057,"sender":0,"sequence":1501208879689,"servTime":1501208879689,"to":604772057},{"content":{"fileId":"7B093D2C3A532CE4AAA60E74C26FA855","fileName":"aaa.jpg","fileSize":3019013},"from":359374414,"isAtMe":false,"isRead":false,"isReadReply":false,"isSend":true,"isSendFailed":false,"isSendSucc":true,"isSending":false,"isUndo":false,"localTime":1501208883000,"msgID":"FB57AC6042029CE4F9D2272CB53DB5F0","msgType":4,"peer":604772057,"sender":0,"sequence":1501208885632,"servTime":1501208885633,"to":604772057}],"offset":0}
 */
exports.messageList = function(peer, offset, limit, callback) {
    sdk.messageList(peer, offset, limit, callback);
};

/*
 * 获取指定id的指定类型的消息列表
 * @param peer      联系人（群组、公共号）id
 * @param offset    从第offset个消息开始取（时间由大到小）
 * @param limit     最多取limit个
 * @param type      消息类型 (MT_Txt: 0, MT_Voice: 3...);
 * @param callback  回调消息列表 （按时间由小到大）
 * json: 每一个消息对象的类型根据 MsgType 来区分
 {"limit":3,"msg-list":[{"content":{"txt":"消息测试 ... "},"from":359374414,"isAtMe":false,"isRead":false,"isReadReply":false,"isSend":true,"isSendFailed":false,"isSendSucc":true,"isSending":false,"isUndo":false,"localTime":1501208725000,"msgID":"8DC8C862DE1C2B848A456D1F8C703005","msgType":0,"peer":604772057,"sender":0,"sequence":1501208724592,"servTime":1501208724592,"to":604772057},{"content":{"txt":"消息测试 ... "},"from":359374414,"isAtMe":false,"isRead":false,"isReadReply":false,"isSend":true,"isSendFailed":false,"isSendSucc":true,"isSending":false,"isUndo":false,"localTime":1501208880000,"msgID":"E1AE239D99870D342B6EC8E19D213F80","msgType":0,"peer":604772057,"sender":0,"sequence":1501208879689,"servTime":1501208879689,"to":604772057},{"content":{"fileId":"7B093D2C3A532CE4AAA60E74C26FA855","fileName":"aaa.jpg","fileSize":3019013},"from":359374414,"isAtMe":false,"isRead":false,"isReadReply":false,"isSend":true,"isSendFailed":false,"isSendSucc":true,"isSending":false,"isUndo":false,"localTime":1501208883000,"msgID":"FB57AC6042029CE4F9D2272CB53DB5F0","msgType":4,"peer":604772057,"sender":0,"sequence":1501208885632,"servTime":1501208885633,"to":604772057}],"offset":0}
 */
exports.messageListOfType = function(peer, offset, limit, type, callback) {
    sdk.messageListOfType(peer, offset, limit, type, callback);
};

/*
 * 全局搜索消息列表
 * @param key      搜索关键字 (string)
 * @param callback  回调消息列表 （按时间由小到大）callback = function (json) { json=消息列表; }
 * 
 */
exports.messageListBySearch = function(key, callback) {
    sdk.messageListBySearch(key, callback);
};

/*
 * 删除消息
 * @param peer  会话方id
 * @param msgId 消息Id  ""空字符串清空该联系人全部消息
 */
exports.removeMessages = function(peer, msgId) {
    sdk.removeMessages(peer, msgId);
};

/*
 * 消息撤销
 * @param servSequence  消息顺序号
 * @param idList 消息接收者列表，如果一对一消息 [peer-id], 如果群发消息[id1, id2, ...]
 * @param callback {"suc":true}
 */
exports.undoMessage = function(servSequence, idList, callback) {
    sdk.undoMessage(servSequence, idList, callback);
};

/*
 * 消息设置已经播放
 * @param peer (long)  会话方id
 * @param msgId 消息Id
 */
exports.messageSetPlay = function(peer, msgId) {
    sdk.messageSetPlay(peer, msgId);
};

/*
 * 获取会话列表
 * @param offset 从第offset个开始获取 -1忽略
 * @param limit  获取limit个 -1忽略
 * @param callback  返回会话列表, 所有公共号会话作为一项
 * json:
 {"ICollection":{"obj":[{"draft":"","isRecvReply":false,"isSend":true,"isSendFailed":false,"isSendSucc":true,"isSending":false,"isTop":false,"isUnDo":false,"lastMsgType":0,"localTime":1501486836000,"peerID":900000002622,"servSequence":1501486836345,"servTime":1501486836345,"sessionID":"SID_900000002622","sessionType":3,"summary":"群消息测试 ... ","unreadCount":0},{"draft":"","isRecvReply":false,"isSend":true,"isSendFailed":false,"isSendSucc":true,"isSending":false,"isTop":false,"isUnDo":false,"lastMsgType":0,"localTime":1501486828000,"peerID":604772057,"servSequence":1501486828664,"servTime":1501486828664,"sessionID":"SID_604772057","sessionType":1,"summary":"消息测试 ... ","unreadCount":0}]}}
 */
exports.sessionList = function(offset, limit, callback) {
    sdk.sessionList(offset, limit, callback);
};

/*
 * 获取公共号会话列表
 * @param offset 从第offset个开始获取 -1忽略
 * @param limit  获取limit个 -1忽略
 * @param callback  返回公共号会话列表
 {"ICollection":{"obj":[{"draft":"","isRecvReply":false,"isSend":false,"isSendFailed":false,"isSendSucc":false,"isSending":false,"isTop":false,"isUnDo":false,"lastMsgType":0,"localTime":1501487070000,"peerID":600000000010,"servSequence":1501487070044,"servTime":1501487070044,"sessionID":"SID_600000000010","sessionType":7,"summary":"少时诵诗书","unreadCount":1},{"draft":"","isRecvReply":false,"isSend":true,"isSendFailed":false,"isSendSucc":true,"isSending":false,"isTop":false,"isUnDo":false,"lastMsgType":0,"localTime":1501487112000,"peerID":600000000002,"servSequence":0,"servTime":1501487112850,"sessionID":"SID_600000000002","sessionType":7,"summary":"公众号消息测试 ... ","unreadCount":0}]}}
 */
exports.publicNumSessionList = function(offset, limit, callback) {
    sdk.publicNumSessionList(offset, limit, callback);
};

/*
 * 关闭会话 (关闭会话后,接收到该联系人的消息计入未读) 
 * @param peer  会话方id
 */
exports.closeSession = function(peer) {
    sdk.closeSession(peer);
};

/*
 * 删除会话 
 * @param sessId  会话id
 */
exports.removeSession = function(sessId) {
    sdk.removeSession(sessId);
};

/*
 * 删除会话 
 * @param sessId  会话id
 * @param isTop 1置顶, 0解除置顶
 */
exports.topSession = function(sessId, isTop) {
    sdk.topSession(sessId, isTop);
};

/*
 * 创建空会话 
 * @param peer  对方id (long)
 * @param type  会话类型
 * @param callback 回调返回会话项
 */
exports.createEmptySession = function(peer, type, callback) {
    sdk.createEmptySession(peer, type, callback);
};

/*
 * 通过对方id,返回会话 
 * @param peer  对方id (long)
 * @param callback 回调返回会话项
 */
exports.sessionByPeerId = function(peer, callback) {
    sdk.sessionByPeerId(peer, callback);
};

/*
 * 通过会话Id,返回会话 
 * @param sessId  会话id (string)
 * @param callback 回调返回会话项
 */
exports.sessionBySessId = function(sessId, callback) {
    sdk.sessionBySessId(sessId, callback);
};

/*
 * 保存草稿
 * @param sessId  会话id
 * @param draft   草稿， ""空字符串清空草稿
 */
exports.saveSessionDraft = function(sessId, draft) {
    sdk.saveSessionDraft(sessId, draft);
};

/*
 * 保存草稿
 * @param sessId  会话id
 * @param callback 回调返回保存的草稿
 */
exports.readSessionDraft = function(sessId, callback) {
    sdk.readSessionDraft(sessId, draft);
};

/*
 * 打开会话 (打开会话后,接收到该联系人的消息不计入未读) 
 * @param peer  会话方id
 */
exports.openSession = function(peer) {
    sdk.openSession(peer);
};

/*
 * 开始接收消息
 * 登录成功后,调用该函数开始接收消息
 */
exports.doRecvMessage = function() {
    sdk.doRecvMessage();
};

/*
 * 接收关注的公共号离线消息
 * cmp连接成功后,调用该函数接收关注的公共号离线消息
 * @param publicIdList 关注的公共号数组 [id1, id2, ...]
 * @param callback      回调函数返回结果 = function (result) { result = true 或者 false; }
 */
exports.doRecvPublicOffline = function(publicIdList, callback) {
    sdk.doRecvPublicOffline(publicIdList, callback);
};

/*
 * 获取该联系人的全部消息条数
 * @param peer 联系人Id (long)
 * @param flag 0 全部消息, 1 不包括自定义消息
 * @param callback      回调函数返回结果 = function (peer-id, count) {  }
 */
exports.msgCountAll = function(peer, flag, callback) {
    sdk.msgCountAll(peer, flag, callback);
};

/*
 * 获取大于(小于)某个时间点的n条消息
 * @param peer          联系人Id (long)
 * @param sequence      时间点(服务器顺序号) 
 * @param localTime     本地时间
 * @param limit         取的条数
 * @param greator       1 返回大于这个时间点的消息 -1返回小于这个时间点的消息
 * @param flag          0 全部消息, 1 不包括自定义消息
 * @param callback      回调函数返回结果 = function (json) { 格式和messageList返回的消息列表格式基本相同 }
 */
exports.messageListOfTime = function(peer, sequence, localTime, limit, greator, flag, callback) {
    sdk.messageListOfTime(peer, sequence, localTime, limit, greator, flag, callback);
};

/*
 * 获取该联系人的全部消息时间戳列表
 * @param peer 联系人Id (long)
  * @param flag 0 全部消息, 1 不包括自定义消息
 * @param callback      回调函数返回结果 = function (peer-id, [time1, time2, time3...], [localTm1, localTm2,...]) { 返回服务器顺序号的数组和本地时间数组 }
 */
exports.msgTimeList = function(peer, flag, callback) {
    sdk.msgTimeList(peer, flag, callback);
};

/*
 * 获取未读消息总的条数
 * @param opt           1返回全部未读消息条数 2返回除去公共号未读消息数
 * @param callback      回调函数返回结果 = function (count) { count返回总的未读条数 }
 */
exports.sessUnreadCount = function(opt, callback) {
    sdk.sessUnreadCount(opt, callback);
};

/*
 * 获取未读消息条数列表
 * @param callback      回调函数返回结果 = function (json) { json.list[i].unreadCount; }
 */
exports.sessUnreadList = function(callback) {
    sdk.sessUnreadList(callback);
};

/**
 * 添加监听函数，每个类型只能添加一个回调
 * @param notifyType notifyType
 * @param callback 回调函数
 */
exports.addSDKListener = function(notifyType, callback) {
    sdk.addSDKListener(notifyType, callback);
};

/**
 * 在本地消息列表中插入一条消息(消息类型是 MT_UDefTxt)
 * @param peer      会话端id (long)
 * @param content   消息内容 (用户自定义的内容)
 * @param time      (INT64) 设置消息时间 (0 忽略)
 * @param unread    (int)   设置消息是否未读 (-1 忽略, 0 已读 1 未读)
 */
exports.cachLocalMessage = function(peer, content, time, unread) {
    sdk.cachLocalMessage(peer, content, time, unread);
};

/**
 * 根据消息id,重发消息
 * @param peerId      会话端id (long)
 * @param msgId       消息Id (string)
 * @param onProg      发送进度回调 = function (msgid, prog) { prog = 1-100; }
 * @param callback    发送结果回调 = function (msgid, suc)  { suc == 0 发送失败; }
 */
exports.sendMessageById = function(peerId, msgId, onProg, callback) {
    sdk.sendMessageById(peerId, msgId, onProg, callback);
};

/*
 * 根据消息id,把消息加入收藏
 * @param peerId      会话端id (long)
 * @param msgId       消息Id (string) 
 * @param index       图片的索引
 * @param callback    收藏结果回调 = function (msgid, suc)  { suc == 0 收藏失败; }
 */
exports.addMessage2Favor = function(peerId, msgId, index, callback) {
    sdk.addMessage2Favor(peerId, msgId, index, callback);
};

/**
 * 从本地搜索收藏列表
 *@param msgId			消息Id
 *@param onResult		function (exist)  { if (exist) 收藏已经存在; }
 */
exports.isFavorExist = function(msgId, callback) {
    sdk.isFavorExist(msgId, callback);
};

/*
 * 从服务器获取收藏列表
 * @param key         翻页时最后一个的id key<=0 从第一个开始 
 * @param pageSize    忽略
 * @param callback    返回结果回调 = function (json)  {  }
 */
exports.takeMessageFavorListFromServ = function(key, pageSize, callback) {
    sdk.takeMessageFavorListFromServ(key, pageSize, callback);
};

/*
 * 从本地获取收藏列表
 * @param key         翻页时最后一个的id key<=0 从第一个开始 
 * @param pageSize    分页大小
 * @param type        类型 (-1) 忽略类型
 * @param callback    返回结果回调 = function (json)  {  }
 */
exports.takeMessageFavorListFromLocal = function(key, pageSize, type, callback) {
    sdk.takeMessageFavorListFromLocal(key, pageSize, type, callback);
};

/*
 * 从本地搜索收藏列表
 * @param key         翻页时最后一个的id key<=0 从第一个开始 
 * @param pageSize    分页大小
 * @param type        类型 (-1) 忽略类型
 * @param searchKey   搜索关键字
 * @param callback    返回结果回调 = function (json)  {  }
 */
exports.searchMessageFavorListFromLocal = function(key, pageSize, type, searchKey, callback) {
    sdk.searchMessageFavorListFromLocal(key, pageSize, type, searchKey, callback);
};

/*
 * 从本地获取收藏列表的条数
 * @param type        类型 (-1) 忽略类型
 * @param callback    返回结果回调 = function (count)  { count=条数; }
 */
exports.countFavorListFromLocal = function(type, callback) {
    sdk.countFavorListFromLocal(type, callback);
};

/*
 * 删除收藏项
 * @param id         收藏id
 * @param localId    收藏本地id
 */
exports.removeFromFavor = function(id, localId) {
    sdk.removeFromFavor(id, localId);
};

/*
 * 从服务器获取剩余空间
 * @param callback   返回剩余空间 = function (suc, remain, used) { if (suc) { remain = 剩余空间大小; used=已用空间大小; } }
 */
exports.getRemainSizeFromServ = function(callback) {
    sdk.getRemainSizeFromServ(callback);
};

/*
 * 强制和服务器同步
 * 正常情况下该函数不需要调用,当登录后第一次打开收藏页时,可以调用该函数同步以前上传失败的项
 */
exports.syncFavorOper = function() {
    sdk.syncFavorOper();
};

/*
 * 把amr文件添加一个文件头
 * pathin 原始的amr路径 (不带文件头的amr文件) 
 * pathout 添加文件头后的文件路径
 * callback 回调返回结果 = function (pathout, isSuc) { }
 */
exports.jointAmrFile = function(pathin, pathout, callback) {
    sdk.jointAmrFile(pathin, pathout, callback);
};

/*
 * 发送按键消息
 @param peer        按键消息接受者
 @param callback    回调函数 = function (suc) { if (suc) 发送成功; }
 */
exports.sendTyping = function(peer, callback) {
    sdk.sendTyping(peer, callback);
};

/*
 * 按类型获取消息条数
 @param peer        消息联系人id (long)
 @param type        消息类型 (int)
 @param callback    回调函数 = function (peer, count) {  peer 联系人id; count 消息条数; }
 */
exports.msgCountOfType = function(peer, type, callback) {
    sdk.msgCountOfType(peer, type, callback);
};

/*
 * 打开阅后即焚消息
 @param peer        消息联系人id (long)
 @param msgId       消息id (string)
 @param servTime    消息的服务器时间 (long)
 @param callback    回调函数 = function (isSuc) {  if (isSuc) do something(); }
 */
exports.openBurnMessage = function(peer, msgId, servTime, callback) {
    sdk.openBurnMessage(peer, msgId, servTime, callback);
};

/*
 * 设置搜索消息的过滤词（通过把表情的列表过滤掉，避免搜索中搜到表情）
 * 该函数必须在initSDKMsg()函数前后立刻调用, 登录之后会禁止调用
 @param wordList    需要过滤的表情字符串数组 [':)','xxx'...]
 */
exports.initSetSearchFilterWords = function(wordList) {
    sdk.initSetSearchFilterWords(wordList);
};

/*
 * 把fromId会话中的所有消息复制到toId会话中 (用于民生银行的bug --!)
 @param fromId     消息联系人id (long)
 @param toId       消息联系人id (long)
 @param callback   回调函数 = function (num) {  if (num>=0) 复制了num条消息; }
 */
exports.copyMessageFrom = function(fromId, toId, callback) {
    sdk.copyMessageFrom(fromId, toId, callback);
};

/*
 * 三方系统获取AuthCode的协议(民生）
 @param type        "OAID"
 @param url         url
 @param callback    回调函数 = function (isSuc, type, authCode) {  if (isSuc) url = url + authCode; }
 */
exports.getUrlAuthCode = function(type, url, callback) {
    sdk.getUrlAuthCode(type, url, callback);
};

/*
 * 获取通用消息AuthCode
 @param callback    回调函数 = function (isSuc, authCode) {  if (isSuc) authCode; }
 */
exports.getGeneralMsgAuthCode = function(callback) {
    sdk.getGeneralMsgAuthCode(callback);
};

/*
 * 获取通用消息菜单（民生）
 @param peerId      peerId
 @param callback    回调函数 = function (menuList) { }
 */
exports.takeGeneralMenuFromServ = function(peerId, callback) {
    sdk.takeGeneralMenuFromServ(peerId, callback);
};

/*
 * 合并消息
 * @param peerId        被转发的消息联系人id
 * @param title         消息合并标题
 * @param msgList       消息列表，格式：[{"senderName":"A", "msgId":"261ABCD979808B641AF5D087C7FE97A3", "content":"Hello"}, {"senderName":"B", "msgId": "5CCE727B3DCA1854FB93EEB29429BA41", "content":"World"}]
 * @param to            发送给谁， peerId或PeerId数组
 * @param callback      回调函数返回结果 = function (result) { result = true 或者 false; }
 */
exports.sendCombineMessage = function(peerId, title, msgList, to, callback) {
    sdk.sendCombineMessage(peerId, title, msgList, to, callback);
};


/*
 * 从Server拉取合并消息
 * @param senderId      发送方ID
 * @param receiverId    接收方ID
 * @param sequence      消息里的sequence
 * @param callback      回调函数返回结果 = function (result) { result = true 或者 false; }
 */
exports.getCombineMessageFromServer = function(senderId, receiverId, sequence, callback) {
    sdk.getCombineMessageFromServer(senderId, receiverId, sequence, callback);
};

/*
 * 转发合并消息
 * @param oldPeer       转发的消息原来的会话ID
 * @param msgId         消息ID
 * @param newPeer       将消息转发给谁
 * @param callback      回调函数返回结果 = function (msgId, isSuccess) { msgId: 新的消息ID, isSuccess = true 或者 false; }
 */
exports.forwardCombineMessage = function(oldPeer, msgId, newPeer, callback) {
    sdk.forwardCombineMessage(oldPeer, msgId, newPeer, callback);
};

/*
 * 拉取消息配置列表
 * @param version       本地版本号
 * @param callback      回调函数返回结果 = function (isSuccess, newVersion, configList) {isSuccess = true 或者 false; newVersion，最新版本号；configList:消息配置列表 }
 */
exports.getMessageConfigList = function(version, callback) {
    sdk.getMessageConfigList(version, callback);
};

/*
 * 拉取消息配置
 * @param msgId         消息ID
 * @param callback      回调函数返回结果 = function (isSuccess, data) {isSuccess = true 或者 false; data:消息配置 }
 */
exports.getMessageConfig = function(msgId, callback) {
    sdk.getMessageConfig(msgId, callback);
};