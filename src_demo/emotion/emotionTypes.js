/**
 * Created by Administrator on 2017/5/17.
 */


// 事件类型，监听需要调用BaseSdk的addSDKListener。
// 系统推送通过融云接口实现，收到消息把参数给BaseSdk的recvedPush，底层处理后会调用相应的通知
var EmotionListenerType = {
    NOTIFY_EMOTION_LIST_CHANGED: 2400,			// 表情列表发生变化
};
exports.EmotionListenerType = EmotionListenerType;
