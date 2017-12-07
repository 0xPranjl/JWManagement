import { Vessels } from '/imports/api/vessels/vessels.coffee'

import './publish/vessel.coffee'
import './publish/vessel.details.js'
import './publish/vessel.search.coffee'

const PersistenceManager = require('/imports/api/persistence/PersistenceManager.js');

Meteor.methods({
    'vessel.insert': ({}, vessel) => {
        // TODO: verify that user has permissions
        try {
            new PersistenceManager(Vessels).insert(vessel);
            return vessel._id;
        } catch(e) {
            throw new Meteor.Error(e);
        }
    },
    'vessel.update': (vesselId, key, value) => {
        // TODO: verify that user has permissions
        try {
            new PersistenceManager(Vessels).update(vesselId, key, value);
        } catch(e) {
            throw new Meteor.Error(e);
        }
    },
    'vessel.visit.insert': ({ projectId, entityId }, visit) => {
        // TODO: verify that user has permissions

        visit.projectId = projectId; // TODO: verify that is vessel project
        delete visit.userId

        const vessel = Vessels.findOne(entityId);
        let visits = vessel.visits;

        visits.push(visit);

        try {
            new PersistenceManager(Vessels).update(vessel._id, 'visits', visits); // TODO: add push method
            return vessel._id;
        } catch(e) {
            throw new Meteor.Error(e);
        }
    },
    'vessel.visit.getAvailableHarbors': ({ projectId }) => {
        // TODO: verify that user has permissions

        const project = Projects.findOne(projectId, {
            fields: {
                vesselModule: 1,
                harbors: 1
            }
        });

        if (project != null && project.vesselModule) {
            return project.harbors.map(({ _id, name}) => {
                return {
                    key: _id,
                    value: name
                }
            });
        }

        return [];
    }
})
