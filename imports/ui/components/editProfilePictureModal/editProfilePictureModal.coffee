import { wrs } from '/imports/util/delay.coffee'

import './editProfilePictureModal.tpl.jade'

Template.editProfilePictureModal.onRendered ->

	$('#editProfilePictureModal').modal('show')
	$('#editProfilePictureModal').on 'hidden.bs.modal', ->
		wrs -> FlowRouter.setQueryParams editProfilePicture: undefined

Template.editProfilePictureModal.events

	'change #edit': (e) -> if e.target.files.length > 0
		picture = new FS.File e.target.files[0]
		picture.userId = Meteor.userId()

		$('#editProfilePictureModal').modal('hide')

		Meteor.users.methods.picture.remove.call {}, (e) ->
			if e then handleError e
			else
				Pictures.insert picture, (e, file) ->
					if e then handleError e
					else
						Tracker.autorun (tracker) ->
							fileObj = Pictures.findOne file._id

							tracker.stop() if fileObj.hasStored('images')

	'click #delete': (e) ->
		Meteor.users.methods.picture.remove.call {}, (e) ->
			if e then handleError e
			else
				$('#editProfilePictureModal').modal('hide')
