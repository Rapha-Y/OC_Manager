import FirebaseKeys from './important-info/apiKey';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { decode, encode } from 'base-64';

//temporary data
import users from './testData/users';
import characters from './testData/characters';
import useruserfollows from './testData/useruserfollows';
import sections from './testData/sections';
import sectionsectioncontains from './testData/sectionsectioncontains';
import sectioncreationcontains from './testData/sectioncreationcontains';
import lores from './testData/lores';
import itemlists from './testData/itemlists';
import listItems from './testData/items';
import content from './testData/content.json';

if(!global.btoa) { global.btoa = encode };
if(!global.atob) { global.atob = decode };

class Fire {

    constructor() {
        if(!firebase.app.length) {
            firebase.initializeApp(FirebaseKeys);
        }
    }

    //maybe return more than just the id? Could be interesting
    async getAllCharacters() {
        //try might be unnecessary, error handling is useful, though
        try {
            const response = await this.firestore.collection("characters").get();
            return response.docs.map(function(doc) {
                return {
                    cid: doc.id,
                    avatar: doc.data().avatar,
                    name: doc.data().name,
                    description: doc.data().description
                }
            });
        } catch (err) {
            console.log("Error: ", err);
        }
    }

    //temporary functions - the calls made to these functions are to be kept, but their way of handling
    //data shall be updated to store/fetch data from firebase instead
    getUID(email, password) {
        var user = users.filter(function (usr) {
            return (usr.email == email && usr.password == password);
        });
        if(user.length == 0) {
            return null;
        } else {
            return user[0].uid;
        }
    }

    getUser(uid) {
        var user = users.filter(function (usr) {
            return (usr.uid == uid);
        });
        return user[0];
    }

    getUsername(uid) {
        var user = this.getUser(uid);
        return user.username;
    }

    getUsertag(uid) {
        var user = this.getUser(uid);
        return user.usertag;
    }

    getAvatar(uid) {
        var user = this.getUser(uid);
        return user.avatar;
    }

    getCover(uid) {
        var user = this.getUser(uid);
        return user.cover;
    }

    getDescription(uid) {
        var user = this.getUser(uid);
        return user.description;
    }

    getRootSection(uid) {
        function isRoot(sid) {
            var matchList = sectionsectioncontains.filter(function (sec) {
                return sec.childid == sid;
            });
            if(matchList.length != 0) {
                return false;
            } else {
                return true;
            }
        }

        var sectionList = sections.filter(function (sec) {
            return (sec.uid == uid);
        });
        
        var root = sectionList.filter(function (sec) {
            return (isRoot(sec.sid));
        });
        
        return root[0].sid;
    }

    countCharacters(uid) { //might be worth to separate character list from count later
        var characterList = characters.filter(function (char) {
            return (char.uid == uid);
        });
        return characterList.length;
    }

    countFollowers(uid) { //might be worth to separate follower list from count later
        var followerList = useruserfollows.filter(function (flw) {
            return (flw.followedid == uid);
        });
        return followerList.length;
    }

    creationIsIn(cid, lnkList) {
        var matchList = lnkList.filter(function (lnk) {
            return (lnk.cid == cid);
        });
        if(matchList.length == 0) {
            return false;
        } else {
            return true;
        }
    }

    getCharacter(cid) {
        var char = characters.filter(function (chr) {
            return (chr.cid == cid);
        });
        return char[0];
    }

    getCharacterName(cid) {
        var char = this.getCharacter(cid);
        return char.name;
    }

    getChararacterPic(cid) {
        var char = this.getCharacter(cid);
        return char.avatar;
    }

    getCharacterDescript(cid) {
        var char = this.getCharacter(cid);
        return char.description;
    }

    getCharDropdowns(cid) { //add function to order dropdown by position later
        var dropdowns = itemlists.filter(function (list) {
            return(list.cid == cid);
        });
        var dropdownIDs = dropdowns.map(function (dpdn) {
            return dpdn.ssid;
        });
        return dropdownIDs;
    }

    getCharDropdownName(ssid) {
        var dropdown = itemlists.filter(function (list) {
            return(list.ssid == ssid);
        });
        return dropdown[0].name;
    }

    getCharDropdownDisplay(ssid) {
        var dropdown = itemlists.filter(function (list) {
            return(list.ssid == ssid);
        });
        return dropdown[0].display;
    }

    getCharDropdownItems(ssid) {
        var items = listItems.filter(function (item) {
            return(item.ssid == ssid);
        });
        var itemIDs = items.map(function (itm) {
            return itm.iid;
        });
        return itemIDs;
    }

    getListItem(iid) {
        var item = listItems.filter(function (itm) {
            return(itm.iid == iid);
        });
        return item[0];
    }

    getListItemTitle(iid) {
        var item = this.getListItem(iid);
        return item.title;
    }

    getListItemContent(iid) {
        var unorderedContent = content.filter(function (con) {
            return(con.iid == iid);
        });
        var orderedContent = unorderedContent.sort(function (a, b) {
            if(a.position < b.position) {
                return -1;
            } else { //assuming >0, could be interesting to add an error if ==0
                return 1;
            }
        });
        return orderedContent;
    }

    getLore(cid) {
        var lore = lores.filter(function (lor) {
            return (lor.cid == cid);
        });
        return lore[0];
    }

    getLoreName(cid) {
        var lore = this.getLore(cid);
        return lore.name;
    }

    getSection(sid) {
        var section = sections.filter(function (sec) {
            return (sec.sid == sid);
        });
        return section[0];
    }

    getSectionName(sid) {
        var section = this.getSection(sid);
        return section.name;
    }

    getSectionCharacters(sid) {
        var self = this;
        var linkList = sectioncreationcontains.filter(function (lnk) {
            return (lnk.sid == sid);
        });
        var characterList = characters.filter(function (char) {
            return (self.creationIsIn(char.cid, linkList));
        });
        var charIdList = characterList.map(function (char) {
            return char.cid;
        });
        return charIdList;
    }

    getSectionLores(sid) {
        var self = this;
        var linkList = sectioncreationcontains.filter(function (lnk) {
            return (lnk.sid == sid);
        });
        var loreList = lores.filter(function (lor) {
            return (self.creationIsIn(lor.cid, linkList));
        });
        var loreIdList = loreList.map(function (lor) {
            return lor.cid;
        });
        return loreIdList;
    }

    sectionIsIn(sid, lnkList) {
        var matchList = lnkList.filter(function (lnk) {
            return (lnk.childid == sid);
        });
        if(matchList.length == 0) {
            return false;
        } else {
            return true;
        }
    }

    getSubsections(sid) {
        var self = this;
        var linkList = sectionsectioncontains.filter(function (lnk) {
            return (lnk.parentid == sid);
        });
        var sectionList = sections.filter(function (sec) {
            return (self.sectionIsIn(sec.sid, linkList));
        });
        var secIdList = sectionList.map(function (sec) {
            return sec.sid;
        });
        return secIdList;
    }

    emailExists(email) {
        var user = users.filter(function (usr) {
            return usr.email == email;
        });
        if(user.length != 0) {
            return true;
        } else {
            return false;
        }
    }
    //temp func end

    createUser = async user => {
        let remoteUri = null;
        
        try {
            await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);

            let db = this.firestore.collection("users").doc(this.uid);

            db.set({
                username: user.username,
                email: user.email
            });
        } catch (error) {
            console.log(error);
            alert("Error: ", error);
        }
    }

    get firestore() {
        return firebase.firestore();
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }
}

Fire.shared = new Fire();
export default Fire;