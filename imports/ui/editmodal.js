import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './editmodal.html';

Template.editmodal.events({
    'click .btn-save-changes'(event) {
        const txtEdit = $('#txtEdit');
        const id = txtEdit.data('postid');
        const text = txtEdit.val();

        Meteor.call('userposts.update', id, text);

        $('#edit-modal').modal('hide');
    }
});