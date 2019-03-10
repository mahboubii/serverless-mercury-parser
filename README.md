# Mercury Parser Lambda Function

## Description

This module allows you quickly deploy your own version of
[Mercury Parser](https://github.com/postlight/mercury-parser)
as a serverless function

### Supported Providers

- AWS

### Deployment

- Installing the serverless cli

  - `yarn global add serverless`
  - `yarn install`
  - `serverless deploy`

### Usage

`GET https://API.amazonaws.com/dev/parser?qs=[url]`

The result looks like this:

```json
{
	"title": "Thunder (mascot)",
	"content": "<div><div><p>This is the content of the page!</div></div>",
	"author": "Wikipedia Contributors",
	"date_published": "2016-09-16T20:56:00.000Z",
	"lead_image_url": null,
	"dek": null,
	"next_page_url": null,
	"url": "https://en.wikipedia.org/wiki/Thunder_(mascot)",
	"domain": "en.wikipedia.org",
	"excerpt": "Thunder Thunder is the stage name for the horse who is the official live animal mascot for the Denver Broncos",
	"word_count": 4677,
	"direction": "ltr",
	"total_pages": 1,
	"rendered_pages": 1
}
```
