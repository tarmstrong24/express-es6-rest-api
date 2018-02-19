import resource from 'resource-router-middleware';
import entry from '../models/entry';

export default ({ config }) => resource({

	/** Property name to store preloaded entity on `request`. */
	id : 'entry',

	/** GET / - List all entities */
	index({ params }, res) {
/* 		let newentry = new entry({name: 'timarmstrong'});
		newentry.save(function(err, entry){
			res.json(entry);
		}); */
		entry.find({}, function(err, entries){
			res.json(entries);
		});
	},

	/** POST / - Create a new entity */
	create({ body }, res) {
		body.id = facets.length.toString(36);
		facets.push(body);
		res.json(body);
	}

});
