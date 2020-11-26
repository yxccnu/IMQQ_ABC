/**
 * Created by Administrator on 2017/5/4.
 */

/*
 * 向UI抛送的通知
 */
var MsgListenerType = {
    NOTIFY_SESSION_CHANGED : 1900,			// 会话信息变化 str3 session-id, long1 peer id 这两个参数可能只存在一个
    NOTIFY_SESSION_ADD : 1901,				// 添加会话 long1 peer id, str3 session-id, 
    NOTIFY_SESSION_REMOVED : 1902,			// 会话被删除 long1 peer id, str3 session-id, 
    NOTIFY_MESSAGE_RECVED_ADD : 1903,				// 接收到新消息，并插入到数据库 long1 user-id, obj5 ICollection* <IMsgBase>
    NOTIFY_MESSAGE_SENDING_ADD : 1904,			// 把发送的消息插入数据库 long1 user-id, obj5 ICollection* <IMsgBase>
    NOTIFY_MESSAGE_REMOVED : 1905,			// 删除消息 long1 user-id, str3 msg-id
    NOTIFY_MESSAGE_CHANGED : 1906,		// 消息状态发生变化 long1 user-id, str3 msg-id, obj5 IMsgBase*
    NOTIFY_MSG_READ_REPLY_RECVED: 1907,				// 接收到发送消息的已读通知long1 peer id
    NOTIFY_TYPING_RECVED: 1908,			// 收到按键消息 long1 peer id
    NOTIFY_MESSAGE_BURNED: 1909,			// 阅后即焚消息被销毁（在表中删除） long1 user-id, str3 msg-id
    NOTIFY_MESSAGE_BANNED: 1910,			// 消息发送因为敏感词被禁止 long1 user-id, str3 msg-id, str4[0] reason
    NOTIFY_SPECIAL_MESSAGE_RECVED: 1911,	// 特殊消息类型接收, 消息直接抛到UI, 底层不保存消息 long1 peerId, obj5 IMsgBase*
};

exports.MsgListenerType = MsgListenerType;


/*
 * 缓存消息时的消息状态
 */
 
 var SaveMsgState = {
    SMS_SENDING : 1,			// 消息正在发送中
    SMS_SEND_FAILED : 2,				// 消息发送失败
};

 exports.SaveMsgState = SaveMsgState;


 /*
  * 消息类型
  */

 var MsgType = {
     MT_Txt: 0,			        // 文本消息
     MT_Voice: 3,			    // 语音消息
     MT_Video: 5,			    // 视频消息
     MT_File: 4,			        // 文件消息
     MT_Emotion: 0x06,			// 表情消息
     MT_Card: 0x08,			    // 名片消息
     MT_Location: 0x09,		    // 位置消息	
     MT_MultiImg: 0x0A,			// 图片消息
     MT_UDefTxt: 0x10,			// 自定义消息
     MT_UDefFile: 0x11,			
     MT_OutLink: 0x38,			// 链接消息
     MT_PublicPlainTxt: 0x0D,	// 公共号文本消息		
     MT_PublicImgTxt: 0x0C,		// 公共号图文消息
     MT_PublicOutLink: 0xE,	    // 公共号链接消息
     MT_PublicForward: 0x0F,    // 转发的公众号图文消息
     MT_TxtAt: 0x37,			    // 文本消息附带@
     MT_RichTxt: 0x3A,          // 富文本消息 (图片+ 文字) 
     MT_SystemNotify: 0x32,     // 系统通知
     MT_Unknown: 0x7E,          // 未知消息
 };

 exports.MsgType = MsgType;

 var CardType = {
     MCT_CONTACT : 0x01,
     MCT_GROUP : 0x02,
     MCT_PUBLIC : 0x03,
     MCT_OTHER : 0x04,
 };

 exports.CardType = CardType;