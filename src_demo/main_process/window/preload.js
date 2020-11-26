/**
 * Created by Administrator on 2017/7/4.
 */

var Electron = require('electron');
var accountsSdk = require("./../../accounts/accounts");

var {SearchContactsParam, ContactListenerType } = require("./../../contact/contactTypes");
var contactSdk = require("./../../contact/contactSdk");
const {FriendsListenerType, LoadFriendNotificationType} = require("./../../friends/friendsTypes");
var friendsSdk = require("./../../friends/friendsSdk");

const {LoadDeptOption, EnterprizeListenerType } = require("./../../enterprize/enterprizeTypes");
var enterprizeSdk = require("./../../enterprize/enterprizeSdk");

var baseSdk = require("./../../sdkbase/BaseSdk");

//const {OrganizeListenerType, ORGANIZE_INVITE_STATE, ACCEPT_ORGANIZE_RESULT,ORGANIZE_ADMIN_TRANSFER,SEARCH_ORGANIZES_PARAM} = require("./../../organize/OrganizeSdkTypes");
var organizeType = require("./../../organize/OrganizeSdkTypes");
var organizeSdk = require("./../../organize/OrganizeSdk");

const {PortraitListenerType} = require("./../../portrait/portraitTypes.js");
var portraitSdk = require("./../../portrait/PortraitSdk.js");

var pnTypes = require("./../../public_number/publicNumberTypes");
var pnSdk = require("./../../public_number/publicNumberSdk");

var transferSdk = require("./../../transfer/TransferSdk");

var txl = require("./../../enterprise_book/enterprise_book.js");
var addressbook = require("./../../addressbook/addressbook.js");

var imTypes = require("./../../im/imTypes");
var imSdk = require("./../../im/imSdk");
const {GroupListenerType, SEARCH_GROUPS_PARAM, GroupInformType} = require("./../../group/groupTypes");
var groupSdk = require("./../../group/groupSdk");

const {CallMediaType, avVideoResolutionProfile, VOIP_CALL_NOTIFICATIONS} = require("./../../rongvoip/rongVoipTypes");
var voipSdk = require("./../../rongvoip/rongvoip");

var voipClientSdk = require("./../../rongvoipclient/rongvoipclient");

var msgSdk = require("./../../msg/msgSdk");
const {MsgListenerType, SaveMsgState, MsgType, CardType} = require("./../../msg/msgSdkTypes");

var pinSdk = require("./../../pin/pinSdk");
const {PINListOption, PinListenerType} = require("./../../pin/pinTypes");

var emotionSdk = require("./../../emotion/emotionSdk");
const {EmotionListenerType} = require("./../../emotion/emotionTypes");

var dataMigrationSdk = require("./../../data_migration/dataMigrationSdk");

process.once('loaded', () => {
    global.Electron = Electron;
    global.accountsSdk = accountsSdk;
    global.SearchContactsParam = SearchContactsParam;
    global.ContactListenerType = ContactListenerType;
    global.contactSdk = contactSdk;
    global.FriendsListenerType = FriendsListenerType;
    global.LoadFriendNotificationType = LoadFriendNotificationType;
    global.friendsSdk = friendsSdk;
    global.baseSdk = baseSdk;
    global.organizeType = organizeType;
    global.organizeSdk = organizeSdk;
    global.portraitSdk = portraitSdk;
    global.PortraitListenerType = PortraitListenerType;
    global.addressbook = addressbook;

    global.pnTypes = pnTypes;
    global.pnSdk = pnSdk;
    global.transferSdk = transferSdk;
    global.txl = txl;
    global.imTypes = imTypes;
    global.imSdk = imSdk;

    global.groupSdk = groupSdk;
    global.GroupListenerType = GroupListenerType;
    global.SEARCH_GROUPS_PARAM = SEARCH_GROUPS_PARAM;
    global.GroupInformType = GroupInformType;

    global.CallMediaType = CallMediaType;
    global.avVideoResolutionProfile = avVideoResolutionProfile;
    global.VOIP_CALL_NOTIFICATIONS = VOIP_CALL_NOTIFICATIONS;
    global.voipSdk = voipSdk;
    global.voipClientSdk = voipClientSdk;

    global.msgSdk = msgSdk;
    global.MsgListenerType = MsgListenerType;
    global.SaveMsgState = SaveMsgState;
    global.MsgType = MsgType;
    global.CardType = CardType;

    global.LoadDeptOption = LoadDeptOption;
    global.EnterprizeListenerType = EnterprizeListenerType;
    global.enterprizeSdk = enterprizeSdk;

    global.pinSdk = pinSdk;
    global.PINListOption = PINListOption;
    global.PinListenerType = PinListenerType;

    global.emotionSdk = emotionSdk;
    global.EmotionListenerType = EmotionListenerType;

    global.dataMigrationSdk = dataMigrationSdk;
});