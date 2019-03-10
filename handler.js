const Mercury = require('@postlight/mercury-parser');

module.exports.parser = async (event, context) => {
	const url = event.queryStringParameters && event.queryStringParameters.qs;
	const key = event.headers['x-api-key'];

	if (
		process.env.SECRET_KEY &&
		process.env.SECRET_KEY !== 'null' &&
		key !== process.env.SECRET_KEY
	) {
		return {
			statusCode: 403,
			body: JSON.stringify({ error: 'missing or wrong x-api-key' }),
		};
	}

	if (!url) {
		return {
			statusCode: 422,
			body: JSON.stringify({ error: 'missing url, use ?qs=[url]' }),
		};
	}

	try {
		const parsed = await Mercury.parse(url);
		return { statusCode: 200, body: JSON.stringify(parsed) };
	} catch (err) {
		return { statusCode: 404, body: JSON.stringify(err) };
	}
};
