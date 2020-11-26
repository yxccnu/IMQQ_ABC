/**
 * Created by Administrator on 2017/6/7.
 */

/*
 * 通知定义
 */
var GroupListenerType = {
    NOTIFY_GROUP_CHANGED : 313,				// 群信息发生变化（名字） long1 group-id, obj5 IGroup*
    NOTIFY_GROUP_MEMBERS_CHANGED : 314,			// 群成员发生变化（名字） long1 group-id, (obj5 IGroupMembers*)可能存在
    NOTIFY_GROUP_LIST_CHANGED_ADD : 321,		// 讨论组列表发生变化 (群添加）obj5 IGoupListItem*
    NOTIFY_GROUP_LIST_CHANGED_DELETE : 322,		// 讨论组列表发生变化 (群删除）long1 groupid
    NOTIFY_GROUP_INFORM_TYPE_CHANGED : 323,		// 讨论组通知方式变化 long1 groupid,  long2 通知方式
    NOTIFY_GROUP_CREATOR_CHANGED : 324,			// 讨论组创建者发生变化 long1 groupid,  long2 creator
    NOTIFY_GROUP_MESSAGE : 325,				// 讨论推送的通知消息（界面调用写入消息列表）obj5 IGroupMessage*
    NOTIFY_GROUP_CLEAR_CACHE : 326,				// 清空内部GroupCache，内部消息无需向sdk外部暴露
    NOTIFY_GROUP_MEMBER_CLEAR_CACHE: 327,		// 清空内部GroupMemberCache，内部消息无需向sdk外部暴露
};
exports.GroupListenerType = GroupListenerType;

/**
 * 类型区分群还是讨论组
 * @type {{GT_GROUP: number, GT_ORGANIZE: number}}
 */
var GroupType = {
    GT_GROUP : 1,				// 群组
    GT_ORGANIZE : 2,					// 讨论组
};
exports.GroupType = GroupType;

// 讨论组通知类型
var GroupInformType = {
    GIT_RecvAndInform : 1,		// 接收消息并提醒
    GIT_RecvAndNoInform : 2,		// 接收不提醒
    GIT_NoRecv : 3,				// 不接收
};
exports.GroupInformType = GroupInformType;

// searchLocalGroups 预定义的搜索类型
var SEARCH_GROUPS_PARAM = {
    SGP_NAME : 0x01,
    SGP_NAME_PINYIN : 0x01 << 1,
};
exports.SEARCH_GROUPS_PARAM = SEARCH_GROUPS_PARAM;

var GroupMessageType = {
    GCT_GroupJoined : 0x1,					// groupId fromId fromName groupName
    GCT_GroupInforChanged_Name : 0x2,			// groupId fromId fromName groupName
    GCT_GroupInforChanged_Introduction : 0x3,	// groupId fromId fromName groupName(introduction)
    GCT_GroupMemberAdded : 0x04,				// groupId fromId fromName members
    GCT_GroupMemberRemoved : 0x05,				// groupId fromId fromName members
    GCT_GroupMemberLeave : 0x06,				// groupId fromId fromName
    GCT_GroupIAmJoined : 0x07,				// groupId fromId
    GCT_GroupDimiss : 0x09,					// groupId fromId
    GCT_GroupEner : 0x0B,						// groupId fromId fromName
    GCT_GroupCreatorChanged : 0x0C,			// groupId fromId
};
exports.GroupMessageType = GroupMessageType;

// ------------------ 通知回调定义 -------------------
var on_notify_group_changed = {
    notiId: "通知id",
    groupId: "讨论组id",
    group:{
        type: "number GroupType",
        informType: "number GroupInformType",
        name: "string 讨论组名称",
        creator: "number 创建者Id",
        admin: "number 管理员Id",
        groupID: "number 讨论组Id",
        version: "number 版本号",
        portrait: "string 头像",
        proclamation: "string 公告",
        introduction: "string 简介"
    }
};

var on_notify_group_members_changed = {
    notiId: "通知id",
    groupId: "讨论组id",
    groupMembers: {
        isAll: "number 0/1 是否包含全部成员",
        members:[
            {
                id: "number 成员id",
                name: "string 成员名",
                portrait: "string 头像"
            },
        ]
    }
};

var on_notify_group_list_changed_add = {
    notiId: "通知id",
    groupId: "讨论组id",
    groupName: "讨论组名称"
};

var on_notify_group_list_changed_delete = {
    notiId: "通知id",
    groupId: "讨论组id",
};

var on_notify_group_inform_type_changed = {
    notiId: "通知id",
    groupId: "讨论组id",
    informType: "通知设置"
}

var on_notify_group_creator_changed = {
    notiId: "通知id",
    groupId: "讨论组id",
    creator: "创建者id"
};

var on_notify_group_message = {
    notiId: "通知id",
    groupId: "讨论组id",
    type: "GroupMessageType",
    fromId: "",
    fromName: "",
    groupName: "",
    members:{
        isAll: "number 0/1 是否包含全部成员",
        members:[
            {
                id: "number 成员id",
                name: "string 成员名",
                portrait: "string 头像"
            },
        ]
    },
    fromInvite: "",
    approvedId: "",
    rejectId: "",
};










// ----------- 回调返回值定义 ---------------

var fastGroupByIdResult = {
    isSync:"number 0/1",
    group: {
        type: "number GroupType",
        informType: "number GroupInformType",
        name: "string 讨论组名称",
        creator: "number 创建者Id",
        admin: "number 管理员Id",
        groupID: "number 讨论组Id",
        version: "number 版本号",
        portrait: "string 头像",
        proclamation: "string 公告",
        introduction: "string 简介"
    }
};

var fastGroupMembersByIdResult = {
    isSync: "number 0/1 异步、同步取得数据",
    members: {
        isAll: "number 0/1 是否包含全部成员",
        members:[
            {
                id: "number 成员id",
                name: "string 成员名",
                portrait: "string 头像"
            },
        ]
    }
};

var allGroupMembersByIdResult = {
    isAll: "number 0/1 是否包含全部成员",
    members:[
        {
            id: "number 成员id",
            name: "string 成员名",
            portrait: "string 头像"
        },
    ]
};

var takeGroupsResult = [
    {
        groupId: "number 讨论组id",
        name: "string 名称"
    },
];

var buildGroupQRCodeResult = {
    qrcode: "string 二维码url"
};