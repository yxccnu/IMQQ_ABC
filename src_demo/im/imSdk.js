/**
 * Created by Administrator on 2017/6/14.
 */
const ImSdk = require("../../Windows/sdk/ImSdk.node").ImSdk;
var sdk = new ImSdk();

/**
 * 初始化
 * @param appKey
 */
exports.init = function (appKey) {
    sdk.init(appKey);
};

/**
 * 设置日志级别
 * @param debugLevel DebugLevel
 */
exports.setDebugLevel = function (debugLevel) {
    sdk.setDebugLevel(debugLevel)
};

/**
 * SDK版本号
 */
exports.getSDKVersion = function () {
    return sdk.getSDKVersion();
};

/**
 * 设置服务器信息
 * @param naviUrl
 * @param fileServerUrl
 */
exports.setServerInfo = function (naviUrl, fileServerUrl) {
    sdk.setServerInfo(naviUrl, fileServerUrl);
};

exports.connect = function (token, userId) {
    sdk.connect(token, userId);
};

/**
 * 设置监听连接状态
 * @param callback
 */
exports.registerConnectionStatusListener = function (callback) {
    sdk.registerConnectionStatusListener(callback);
};

/**
 * 获取会话列表
 * @param conversationTypes 会话类型数组
 */
exports.getConversationList = function (conversationTypes) {
    return sdk.getConversationList(conversationTypes);
};

/**
 * 搜索本地消息记录
 * @param conversationTypes 会话类型数组
 * @param objNames 搜索的消息类型,例如:RC:TxtMsg, RC:VcMsg, RC:ImgMsg, RC:FileMsg
 * @param keyword 搜索的关键字。
 * @return 符合条件的会话列表
 */
exports.searchConversationByContent = function (conversationTypes, objNames, keyword) {
    return sdk.searchConversationByContent(conversationTypes, objNames, keyword);
};

/**
 * 获取会话
 * @param conversationTypes 会话类型数组
 * @param targetId 要获取的用户UserId
 * @return Conversation Json
 */
exports.getConversation = function (conversationType, targetId) {
    return sdk.getConversation(conversationType, targetId);
};


/**
 * 删除会话
 * @param conversationTypes 会话类型数组
 * @param 目标 Id。根据不同的 conversationType，可能是用户 Id、讨论组 Id、群组 Id 或聊天室 Id。
 * @return Boolean，true：删除成功；false：删除失败
 */
exports.removeConversation = function (conversationType, targetId) {
    return sdk.removeConversation(conversationType, targetId);
};


/**
 * 将会话置顶
 * @param conversationTypes 会话类型数组
 * @param 目标 Id。根据不同的 conversationType，可能是用户 Id、讨论组 Id、群组 Id 或聊天室 Id。
 * @param isTop 是否置顶
 * @return Boolean，true：设置成功；false：设置失败
 */
exports.setConversationToTop = function (conversationType, targetId, isTop) {
    return sdk.setConversationToTop(conversationType, targetId, isTop);
};

/**
 * 设置会话隐藏/显示
 * @param conversationTypes 会话类型数组
 * @param 目标 Id。根据不同的 conversationType，可能是用户 Id、讨论组 Id、群组 Id 或聊天室 Id。
 * @param isHidden 是否隐藏
 * @return Boolean，true：设置成功；false：设置失败
 */
exports.setConversationHidden = function (conversationType, targetId, isHidden) {
    return sdk.setConversationHidden(conversationType, targetId, isHidden);
};

/**
 * 保存文字消息草稿
 * @param conversationTypes 会话类型数组
 * @param 目标 Id。根据不同的 conversationType，可能是用户 Id、讨论组 Id、群组 Id 或聊天室 Id。
 * @param content 草稿的文字内容。
 * @return Boolean，true：设置成功；false：设置失败
 */
exports.saveTextMessageDraft = function (conversationType, targetId, content) {
    return sdk.saveTextMessageDraft(conversationType, targetId, content);
};

/**
 * 清空会话列表
 * @param conversationTypes 会话类型数组
 */
exports.clearConversations = function (conversationTypes) {
    return sdk.clearConversations(conversationTypes);
};


//-------------------------------------------------------------------------------------

/**
 * 发送消息
 * @param conversationType
 * @param targetId
 * @param messageContent 类
 * { messageType：MessageType
 *   extra: string
 *   content: 适用于 TextMessage
 *   userInfo:{ // 待定
 *      userId:
 *      userName:
 *      portraitUri:
 *      joinTime:
 *   }
 * }
 * @param users userId 数组
 * @param pushContent
 * @param pushData
 */
exports.sendMessage = function (conversationType, targetId, messageContent, users, pushContent, pushData) {
    return sdk.sendMessage(conversationType, targetId, messageContent, users, pushContent, pushData);
};

/**
 * 消息监听
 * @param callback
 */
exports.registerMessageListener = function (callback) {
    sdk.registerMessageListener(callback);
};

/**
 * 获取最新消息记录
 * @param conversationType
 * @param targetId
 * @param count 要获取的消息数量
 * @return 最新消息记录，按照时间顺序从新到旧排列。
 */
exports.getLatestedMessages = function (conversationType, targetId, count) {
    return sdk.getLatestedMessages(conversationType, targetId, count);
};
