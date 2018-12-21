import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Userposts } from '../api/userposts.js';

import './userpost.html';

Template.userpost.helpers ({
    isOwner() {
        return this.owner === Meteor.userId();
    }
})

Template.userpost.events({
    'click .delete'() {
        Meteor.call('userposts.remove', this._id);
    },
    'click .edit'(event) {
        event.preventDefault();

        const txtPost = $('#edit-modal #txtEdit');
        const userpost = Userposts.findOne(this._id);
        txtPost.val(userpost.text);
        txtPost.attr('data-postid', this._id);

        $('#edit-modal').modal('show');
    }
});