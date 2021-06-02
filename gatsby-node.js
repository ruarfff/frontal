const path = require(`path`)
const { slugify } = require('./src/utils/utilFunctions')
const _ = require('lodash')

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				"@theme": path.resolve(
					__dirname,
					"./src/theme"
				),
				"@components": path.resolve(__dirname, "./src/components"),
				"@ui": path.resolve(__dirname, "./src/components/ui"),
				"@containers": path.resolve(__dirname, "./src/containers"),
				"@layout": path.resolve(__dirname, "./src/layouts"),
				"@assets": path.resolve(__dirname, "./src/assets"),
				"@utils": path.resolve(__dirname, "./src/utils"),
				"@data": path.resolve(__dirname, "./src/data")
			},
		},
	});
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;
	if (node.internal.type === 'MarkdownRemark') {
		const slugFromTitle = slugify(node.frontmatter.title);
		const date = node.frontmatter.date;
		const dateSplit = date.split(" ");
		createNodeField({
			node,
			name: 'slug',
			value: slugFromTitle
		});
		createNodeField({
			node,
			name: 'id',
			value: slugFromTitle + '-' + dateSplit[0]
		});
		createNodeField({
			node,
			name: "dateSlug",
			value: dateSplit[0]
		});
		if (Object.prototype.hasOwnProperty.call(node.frontmatter, "author")) {
			createNodeField({
				node,
				name: "authorId",
				value: slugify(node.frontmatter.author)
			});
		}
	}
	if (node.internal.type === 'AuthorsJson') {
		createNodeField({
			node,
			name: "authorId",
			value: slugify(node.name)
		});
	}
	if (node.internal.type === 'ItServicesJson') {
		createNodeField({
			node,
			name: "slug",
			value: slugify(node.title)
		})
	}
	if (node.internal.type === 'ItSolutionsJson') {
		createNodeField({
			node,
			name: "slug",
			value: slugify(node.title)
		})
	}
	if (node.internal.type === 'CaseStudiesJson') {
		createNodeField({
			node,
			name: "slug",
			value: slugify(node.title)
		})
	}
}



exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const servicePage = path.resolve("./src/templates/service-template/service-template.js")
	const solutionPage = path.resolve("./src/templates/it-solution-template/it-solution-template.js")
	const caseStudyPage = path.resolve("./src/templates/case-study-template/case-study-template.js")
	const singleBlogPage = path.resolve("./src/templates/blog-template/blog-template.js")
	const blogList = path.resolve("./src/templates/blog-list/blog-list.js");
	const tagPage = path.resolve("./src/templates/tag-template/tag-template.js");
	const categoryPage = path.resolve("./src/templates/category-template/category-template.js");
	const authorPage = path.resolve("./src/templates/author-template/author-template.js");
	const datePage = path.resolve("./src/templates/date-template/date-template.js");
	const searchPage = path.resolve("./src/templates/search-template/search-template.js");


	const result = await graphql(`
        {
            allItServicesJson {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }  
            allItSolutionsJson {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }  
            allCaseStudiesJson{
                edges {
                    node {
                        fields{
                            slug
                        }
                    }
                    next {
                        fields{
                            slug
                        }
                        id
                        title
                        image {
                          childImageSharp {
                            fixed(width: 120, height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                    previous{
                        fields{
                            slug
                        }
                        id
                        title
                        image {
                          childImageSharp {
                            fixed(width: 120, height: 80, quality: 100) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                }
            }  
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                            authorId
                            dateSlug
                        }
                        frontmatter {
                            tags
                            categories
                            date(formatString: "LL")
                        }
                    }
                    next {
                        frontmatter {
                            title
                            featured_image {
                                childImageSharp {
                                    fluid(maxWidth: 720, maxHeight: 120, quality: 100) {
                                        src
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                        }
                        fields {
                            slug
                        }
                    }
                    previous {
                        frontmatter {
                            title
                            featured_image {
                                childImageSharp {
                                    fluid(maxWidth: 720, maxHeight: 120, quality: 100) {
                                        src
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
            }       
        }
    `);

	// Create Single IT Service page

	const itservices = result.data.allItServicesJson.edges;
	itservices.forEach(({ node }) => {
		createPage({
			path: `it-service/${node.fields.slug}`,
			component: servicePage,
			context: {
				slug: node.fields.slug
			}
		})
	});

	// Create Single IT Solution page
	const itsolutions = result.data.allItSolutionsJson.edges;
	itsolutions.forEach(({ node }) => {
		createPage({
			path: `it-solution/${node.fields.slug}`,
			component: solutionPage,
			context: {
				slug: node.fields.slug
			}
		})
	});

	// Create Single Case Study Page

	const caseStudies = result.data.allCaseStudiesJson.edges;
	caseStudies.forEach(({ node, next, previous }) => {
		createPage({
			path: `case-study/${node.fields.slug}`,
			component: caseStudyPage,
			context: {
				slug: node.fields.slug,
				next,
				previous
			}
		})
	});

	// Create Single Blog Page

	const posts = result.data.allMarkdownRemark.edges;
	posts.forEach(({ node, next, previous }) => {
		createPage({
			path: node.fields.slug,
			component: singleBlogPage,
			context: {
				slug: node.fields.slug,
				authorId: node.fields.authorId,
				next,
				previous
			}
		})
	});

	// Create Blog List Page
	// Pagination

	const postsPerPage = 6;
	const numberOfPages = Math.ceil(posts.length / postsPerPage);

	Array.from({ length: numberOfPages }).forEach((_, index) => {
		const isFirstPage = index === 0;
		const currentPage = index + 1;
		if (isFirstPage) return;
		createPage({
			path: `blog/page/${currentPage}`,
			component: blogList,
			context: {
				limit: postsPerPage,
				skip: index * postsPerPage,
				currentPage,
				numberOfPages
			}
		})
	})

	// Create Tags Page

	let tags = []
	_.each(posts, edge => {
		if (_.get(edge, 'node.frontmatter.tags')) {
			tags = tags.concat(edge.node.frontmatter.tags)
		}
	})

	tags = _.uniq(tags)
	tags.forEach(tag => {
		createPage({
			path: `/tag/${slugify(tag)}`,
			component: tagPage,
			context: {
				tag
			}
		})
	})

	// Create Categories Page

	let categories = []
	_.each(posts, edge => {
		if (_.get(edge, 'node.frontmatter.categories')) {
			categories = categories.concat(edge.node.frontmatter.categories)
		}
	})

	categories = _.uniq(categories)
	categories.forEach(category => {
		createPage({
			path: `/category/${slugify(category)}`,
			component: categoryPage,
			context: {
				category
			}
		})
	})

	// Create Authors Page

	let authors = []
	_.each(posts, edge => {
		if (_.get(edge, 'node.fields.authorId')) {
			authors = authors.concat(edge.node.fields.authorId)
		}
	})

	authors = _.uniq(authors)
	authors.forEach(author => {
		createPage({
			path: `/profile/${author}`,
			component: authorPage,
			context: {
				author
			}
		})
	})

	// Create Date Page

	let dates = []
	let dateSlugs = []
	_.each(posts, edge => {
		if (_.get(edge, 'node.frontmatter.date')) {
			dates = dates.concat(edge.node.frontmatter.date)
			dateSlugs = dateSlugs.concat(edge.node.fields.dateSlug)
		}
	})

	dates = _.uniq(dates)
	dateSlugs = _.uniq(dateSlugs)
	dateSlugs.forEach((dateSlug, i) => {
		createPage({
			path: `/date/${dateSlug}`,
			component: datePage,
			context: {
				date: dates[i],
				dateSlug
			}
		})
	})

	// Create Search Page
	createPage({
		path: '/search',
		component: searchPage,
	})
}
