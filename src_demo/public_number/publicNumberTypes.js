/**
 * Created by Administrator on 2017/6/19.
 */
var PublicType = {
    PT_PUBLIC : 1,
    PT_INSTITUTION:2,
};
exports.PublicType = PublicType;


var PublicInformType = {
    PIT_RecvAndInform : 0,		// 接收消息并提醒
    PIT_RecvAndNoInform : 2,		// 接收不提醒
    PIT_NoRecv : 1,				// 不接收
};
exports.PublicInformType = PublicInformType;


exports.PublicNumberListenerType = {
    NOTIFY_PUBLIC_CHANGED : 15,			// 公共号信息发生变化 long1 public-id, obj5 IPublic*
    NOTIFY_PUBLIC_MENU_CHANGED : 500,		// 公共号菜单发生变化 long1 public-id
    NOTIFY_PUBLIC_LIST_CHANGED_DELETE : 501,		// 公共号关注列表发生变化（删除）　long1 public-id
    NOTIFY_PUBLIC_LIST_CHANGED_ADD : 502,	// 公共号关注列表发生变化（添加）　long1 public-id
};




var publicNumbers = [{
    "description" : "测试",
    "informType" : 1330925129,
    "introduction" : "ccccccccccccccccccccccccccccccccccccccccccccccccccccccc",
    "isAttentive" : true,
    "name" : "ccc",
    "namePinyin" : "",
    "portrait" : "",
    "publicID" : 600000000001,
    "publicType" : 1
}, ];

var publicNumber = {
    "publicNumber" : {
        "description" : "测试专属测试专属测试专属测试专属测试专属测试专属测试专属测试专属测试专属测试专属测试专属测试专属测试专属测试专属测试专属测试专属",
        "informType" : 0,
        "introduction" : "测试专属",
        "isAttentive" : false,
        "name" : "测试专属",
        "namePinyin" : "",
        "portrait" : "B1BC79E98A533F5AFDB154707CA844B1_PORTRAIT",
        "publicID" : 600000000003,
        "publicType" : 1
    },
    "sync" : false
};

var menu = [{
    "key": "menu_1",
    "subMenus": [{
        "key": "menu_8",
        "title": "测试二",
        "type": 0,
        "url": ""
    }, {
        "key": "menu_7",
        "title": "测试一",
        "type": 0,
        "url": ""
    }
    ],
    "title": "测试",
    "type": 2,
    "url": ""
}, {
    "key": "material_8_3",
    "title": "图片",
    "type": 0,
    "url": ""
},
];
