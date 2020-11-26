/**
 * Created by Administrator on 2017/5/17.
 */


// 事件类型，监听需要调用BaseSdk的addSDKListener。
// 系统推送通过融云接口实现，收到消息把参数给BaseSdk的recvedPush，底层处理后会调用相应的通知
var PortraitListenerType = {
    NOTIFY_PORTRAIT_CHANGED : 12,			// 用户头像发生变化 long1 user-id, str3 portrait-id, obj5 Portrait*
};
exports.PortraitListenerType = PortraitListenerType;

