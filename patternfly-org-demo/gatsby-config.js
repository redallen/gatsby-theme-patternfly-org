const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'PatternFly 4',
    description: 'Documentation for PatternFly 4',
    siteUrl: 'https://www.patternfly.org'
  },
  plugins: [
    {
      resolve: `gatsby-theme-patternfly-org`,
      options: {
        context: 'org',
        hiddenPages: ['withOuia'], // By title
        sideNav: {
          core: [
            { section: 'overview' },
            { section: 'components' },
            { section: 'layouts' },
            { section: 'utilities' },
            { section: 'demos' },
            { section: 'experimental' },
          ],
          react: [
            { section: 'overview' },
            { section: 'charts' },
            { section: 'components' },
            { section: 'demos' },
            { section: 'experimental' },
            { section: 'inline table' },
            { section: 'layouts' },
            { section: 'virtual scroll' },
          ],
          get_started: [
            { text: 'About', path: '/get-started/about' },
            { text: 'Develop', path: '/get-started/developers' },
            { text: 'Design', path: '/get-started/designers' },
            { text: 'Migration guide', path: '/get-started/migrate' },
            { text: 'Accessibility guide', path: '/get-started/accessibility-guide' },
          ],
          contribute: [
            { text: 'About', path: '/contribute/about' },
            { text: 'Develop', path: '/contribute/developers' },
            { text: 'Design', path: '/contribute/designers' },
          ],
          design_guidelines: [
            { section: 'styles' },
            { section: 'usage and behavior' },
            { section: 'content' }
          ],
        },
        topNavItems: [
          {
            text: 'Get started',
            path: '/get-started/about'
          },
          {
            text: 'Design guidelines',
            path: '/design-guidelines/styles/colors'
          },
          {
            text: 'HTML/CSS',
            path: '/documentation/core/overview/release-notes',
            context: 'core' // This is for highlighting the top nav
          },
          {
            text: 'React',
            path: '/documentation/react/overview/release-notes',
            context: 'react' // This is for highlighting the top nav
          },
          {
            text: 'Contribute',
            path: '/contribute/about'
          },
          {
            text: 'Get in touch',
            path: '/get-in-touch'
          },
        ]
      }
    },
    // Core docs
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'core', // This goes in URLs
    //     path: `${path.resolve(__dirname)}/patternfly-next/src/patternfly`
    //   }
    // },
    // Core release notes
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'core', // This goes in URLs
        path: `${path.resolve(__dirname)}/patternfly-next/RELEASE-NOTES.md`
      }
    },
    // React docs
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'react', // This goes in URLs
    //     path: `${path.resolve(__dirname)}/patternfly-react/packages/patternfly-4`,
    //     /* Files we never care to pull data from
    //      * Matched by https://github.com/paulmillr/chokidar */
    //      ignore: [
    //       '**/dist',
    //       '**/helpers',
    //       '**/scripts',
    //       '**/styles',
    //       '**/build',
    //       '**/utils',
    //       '**/test-helpers',
    //       /.*react-styles.*/,
    //       /.*react-docs.*/,
    //       /.*react-integration.*/,
    //       // eslint-disable-next-line no-useless-escape
    //       '**/\..*', // dotfiles
    //       '**/*.d.ts',
    //       '**/*.test.*',
    //       '**/index.*',
    //       '**/tsconfig.*',
    //       '**/tslint.*',
    //       '**/README.*',
    //       '**/CHANGELOG.*'
    //     ]
    //   }
    // },
    // React release notes
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'react', // This goes in URLs
        path: `${path.resolve(__dirname)}/patternfly-react/RELEASE-NOTES.md`
      }
    },
    // Org docs
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contribute', // This goes in URLs
        path: `${path.resolve(__dirname)}/src/content/contribute`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'get-started', // This goes in URLs
        path: `${path.resolve(__dirname)}/src/content/get-started`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'design-guidelines', // This goes in URLs
        path: `${path.resolve(__dirname)}/src/content/design-guidelines`
      }
    },
    // Our custom plugin for *.js?x *.ts?x files to get prop types
    {
      resolve: path.resolve(__dirname, './patternfly-react/packages/patternfly-4/react-docs/plugins/gatsby-transformer-react-docgen-typescript')
    },
    // The plugin for package.json files (to get version numbers)
    'gatsby-transformer-json',
    // Pipe MDX files through this plugin that spits out React components
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          // Plugin for jpg, png, gif, svg
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: f => `img/${f.hash}-${f.name}`,
              ignoreFileExtensions: []
            }
          },
        ]
      }
    },
  ],
}
