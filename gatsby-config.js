/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	pathPrefix: `/`,
	siteMetadata: {
		title: "Frontal",
		titleTemplate: `Frontal`,
		description: `Frontal.`,
		author: `@HasThemes`,
		twitterUsername: `@HasThemes`,
		image: 'landing.png',
		siteUrl: 'https://frontal.ie/',
		canonical: "https://frontal.ie/",
		getform: "https://getform.io/f/cbf42826-9864-48a7-9c15-9ca48d093fe1",
		copyright: "Frontal. <a href='https://frontal.ie/' target='_blank' rel='noopener noreferrer'>All Rights Reserved.</a>",
		siteLanguage: "en",
		social: {
			facebook: "https://www.facebook.com",
			twitter: "https://www.twitter.com",
			instagram: "https://www.instagram.com",
			linkedin: "https://www.linkedin.com"
		},
		contact: {
			phone: '123456789',
			address: "Down West",
			email: 'hello@frontal.ie',
			website: "https://frontal.ie/",
			rating: "4.9",
			customers: "700",
			clients: "3200",
			addressInfos: [
				{
					"id": "san-francisco",
					"state": "San Francisco",
					"address": "58 Howard Street #2 San Francisco, CA 941",
					"email": "contact.sanfrancisco@mitech.com",
					"phone": "(+68)1221 09876"
				},
				{
					"id": "new-york",
					"state": "New York",
					"address": "58 Howard Street #14 New York",
					"email": "contact.newyork@mitech.com",
					"phone": "(+68)1221 09878"
				}
			]
		}
	},
	mapping: {
		"MarkdownRemark.frontmatter.author": `AuthorsJson.name`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-json`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				"excerpt_separator": `<!-- endexcerpt -->`,
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1200,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `fonts`,
				path: `${__dirname}/src/assets/fonts`,
				ignore: [`**/\.*`]
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
				ignore: [`**/\.*`]
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data`,
				ignore: [`**/\.*`]
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				"name": "Mitech",
				"short_name": "mitech",
				"theme_color": "#086ad8",
				"background_color": "#ffffff",
				"display": "standalone",
				"scope": "/",
				"start_url": "/",
				"icon": "src/assets/images/favicon.png",
				"icons": [
					{
						"src": "/icons/icon-72x72.png",
						"sizes": "72x72",
						"type": "image/png"
					},
					{
						"src": "/icons/icon-96x96.png",
						"sizes": "96x96",
						"type": "image/png"
					},
					{
						"src": "/icons/icon-128x128.png",
						"sizes": "128x128",
						"type": "image/png"
					},
					{
						"src": "/icons/icon-144x144.png",
						"sizes": "144x144",
						"type": "image/png"
					},
					{
						"src": "/icons/icon-152x152.png",
						"sizes": "152x152",
						"type": "image/png"
					},
					{
						"src": "/icons/icon-192x192.png",
						"sizes": "192x192",
						"type": "image/png"
					},
					{
						"src": "/icons/icon-384x384.png",
						"sizes": "384x384",
						"type": "image/png"
					},
					{
						"src": "/icons/icon-512x512.png",
						"sizes": "512x512",
						"type": "image/png"
					}
				],
			},
		},
		{
			resolve: `gatsby-plugin-breadcrumb`,
			options: {
				useAutoGen: true,
				autoGenHomeLabel: `Home`,
				exclude: [
					`/dev-404-page`,
					`/404`,
					`/404.html`,
				],
				useClassNames: true
			},
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://frontal.ie/',
				sitemap: 'https://frontal.ie/sitemap.xml',
				policy: [{ userAgent: '*', allow: '/' }]
			}
		}
	],
}
