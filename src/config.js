// config.js
module.exports = {
    github: {
        username: 'shakibmostahid', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: true, // Forked projects will not be displayed if set to true.
            projects: [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'shakibmostahid',
        twitter: '',
        facebook: '',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: 'https://shakibmostahid.github.io',
        phone: '',
        email: 'shakib.mostahid@outlook.com'
    },
    skills: [
        'PHP',
        'OOP',
        'MVC',
        'MySQL',
        'Phalcon',
        'Laravel',
        'HTML/ CSS',
        'JavaScript',
        'Jquery',
        'C/C++',
        'React.js',
        'GIT',
        'Docker',
        'AWS (Server)',
    ],
    experiences: [
        { 
            company: 'Brain Station 23 LTD.',
            position: 'Associate Software Engineer',
            from: 'February 2022',
            to: 'Present'
        },
        { 
            company: 'Orbit Informatics LTD.',
            position: 'Software Engineer',
            from: 'June 2021',
            to: 'January 2022'
        },
        { 
            company: 'Orbit Informatics LTD.',
            position: 'Jr. Software Engineer',
            from: 'April 2019',
            to: 'May 2021'
        },
        { 
            company: 'Orbit Informatics LTD.',
            position: 'Software Engineer Intern',
            from: 'December 2018',
            to: ' March 2019'
        }
    ],
    education: [
        { 
            institution: 'American International University-Bangladesh',
            degree: 'Bachelor of Science',
            from: '2015',
            to: '2019'
        },
        { 
            institution: 'Govt. Laboratory School and College',
            degree: 'Higher Secondary Certificate (HSC)',
            from: '2013',
            to: '2015',
        },
        { 
            institution: 'Govt. Science College Attached High School',
            degree: 'Secondary School Certificate (SSC)',
            from: '2003',
            to: '2013'
        }
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: '', // medium | dev.to
        username: '',
        limit: 0 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: '' // Please remove this and use your own tag id
    },
    themeConfig: {
        default: 'light',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}
