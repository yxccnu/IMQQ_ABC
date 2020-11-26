/**
 * Created by Administrator on 2017/6/14.
 */

/**
 * 日志级别
 * @type {{DL_DEBUG: number, DL_WARN: number, DL_ERROR: number, DL_NONE: number}}
 */
var DebugLevel = {
    DL_DEBUG:0,
    DL_WARN: 1,
    DL_ERROR: 2,
    DL_NONE: 3
};
exports.DebugLevel = DebugLevel;

// 连接状态
var ConnectionStatus = {
    ConnectionStatus_Connected : 0,
    ConnectionStatus_NetworkUnavailable : 1,
    ConnectionStatus_KickedOff : 6,
    ConnectionStatus_ServerInvalid : 8,
    ConnectionStatus_ValidateFailure : 9,
    ConnectionStatus_Connecting : 10,
    ConnectionStatus_Unconnected : 11,
    ConnectionStatus_SignUp : 12,
    RC_NAVI_MALLOC_ERROR   : 30000,
    RC_NAVI_NET_UNAVAILABLE: 30002,
    RC_NAVI_SEND_FAIL      : 30004,
    RC_NAVI_REQ_TIMEOUT    : 30005,
    RC_NAVI_RECV_FAIL      : 30006,
    RC_NAVI_RESOURCE_ERROR : 30007,
    RC_NAVI_NODE_NOT_FOUND : 30008,
    RC_NAVI_DNS_ERROR      : 30009,
    ConnectionStatus_TokenIncorrect : 31004,
    ConnectionStatus_DisconnExecption : 31011
};
exports.ConnectionStatus = ConnectionStatus;

// 会话类型
var ConversationType = {
    ConversationType_PRIVATE : 1,

    ConversationType_DISCUSSION:2,

    ConversationType_GROUP:3,

    ConversationType_CHATROOM:4,

    ConversationType_CUSTOMERSERVICE:5,

    ConversationType_SYSTEM:6,

    ConversationType_APPSERVICE:7,

    ConversationType_PUBLICSERVICE:8,

    ConversationType_PUSHSERVICE:9,
};
exports.ConversationType = ConversationType;

// 消息状态
var MessageStatus = {

    ReceivedStatus_UNREAD : 0,

    ReceivedStatus_READ : 1,

    ReceivedStatus_LISTENED : 2,

    ReceivedStatus_DOWNLOADED : 4,

    SentStatus_SENDING : 10,

    SentStatus_FAILED : 20,

    SentStatus_SENT : 30,

    SentStatus_RECEIVED : 40,

    SentStatus_READ : 50,

    SentStatus_DESTROYED : 60,
};
exports.MessageStatus = MessageStatus;

// 消息方向，发/收
var MessageDirection = {

    MessageDirection_SEND : 1,
    MessageDirection_RECEIVE : 2,
};
exports.MessageDirection = MessageDirection;

// 消息错误类型
var MessageErrorCode = {

    ERRORCODE_UNKNOWN : -1,

    ERRORCODE_TIMEOUT : 5004,

    REJECTED_BY_BLACKLIST : 405,

    NOT_IN_DISCUSSION : 21406,

    NOT_IN_GROUP : 22406,

    FORBIDDEN_IN_GROUP : 22408,

    NOT_IN_CHATROOM : 23406,

    MSG_ROAMING_SERVICE_UNAVAILABLE : 33007,
};

// 媒体类型
var MediaType = {

    MediaType_IMAGE : 1,

    MediaType_AUDIO:2,

    MediaType_VIDEO:3,

    MediaType_FILE : 100,
};

// 艾特类型
var MentionedInfoType = {
    RC_Mentioned_None : 0,
    /*!
     @所有人
     */
    RC_Mentioned_All : 1,

    /*!
     @部分指定用户
     */
    RC_Mentioned_Users : 2,
};
exports.MentionedInfoType = MentionedInfoType;

var msgType = {
    rcTextMsgObjName : "RC:TxtMsg",
    rcImageMsgObjName : "RC:ImgMsg",
    rcLocMsgObjName : "RC:LBSMsg",
    rcAudioMsgObjName : "RC:AudMsg",
    rcNotificationMsgObjName : "RC:Ntf",
    rcCommandMsgObjName : "RC:Cmd",
    rcFileMsgObjName : "RC:FileMsg",
    rcVideoMsgObjName : "RC:VidMsg",
    rcCustomMsgObjName : "RC:CustomMsg",
    rcStatusMsgObjName : "RC:StatusMsg",
};
exports.msgType = msgType;

var MessageType = {
    TextMessage:"TextMessage",
    ImageMessage:"ImageMessage",
    DiscussionNotificationMessage: "DiscussionNotificationMessage",
    VoiceMessage:"VoiceMessage",
    RichContentMessage: "RichContentMessage",
    HandshakeMessage: "HandshakeMessage",
    UnknownMessage: "UnknownMessage",
    SuspendMessage:"SuspendMessage",
    LocationMessage:"LocationMessage",
    CommandMessage: "CommandMessage"
};
exports.MessageType = MessageType;

