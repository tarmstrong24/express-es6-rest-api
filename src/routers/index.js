import { version } from '../../package.json';
import { Router } from 'express';
import facets from '../controllers/facets';
import entry from '../controllers/entry';

export default ({ config }) => {
	let api = Router();

	// mount the facets resource
	api.use('/facets', facets({ config }));

	api.use('/entries', entry({ config }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
