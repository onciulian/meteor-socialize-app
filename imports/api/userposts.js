import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { check }  from 'meteor/check';

export const Userposts = new Mongo.Collection('userposts');

Meteor.methods ({
    'userposts.insert'(text) {
       check(text, String);
       
       Userposts.insert({
            text,
            createdDate: new Date(),
            username: Meteor.user().username,
            owner: Meteor.userId()
        });
    },
    'userposts.remove'(userpostId) {
        check(userpostId, String);
        Userposts.remove(userpostId);
    },
    'userposts.update'(id,text) {
        check(id, String);
        check(text, String);
        
        // const userpost = Userposts.findOne(id);
        
        // if (userpost.owner !== Meteor.userId()) {
        //    throw new Meteor.Error('not-authorized');
        // }
        
        Userposts.update(id, { $set: { text: text }});
    },
});