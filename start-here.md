```
root                                => the root of the project/repo
├── components                      => includes all the building blocks of the website
│   ├── custom                      => includes all the custom components that are being used by other components in different ways.
│   │   ├── button.js
│   │   ├── headline.js             => H1 Heading
│   │   └── paragraph.js            => long paragraphs.
│   ├── inner-components            => includes all the components that are inserted inside other components.
│   │   ├── computer.js             => The laptop component shown in the header
│   │   ├── hamburgerMenu.js
│   │   ├── nav-options.js          => Navigation options only.
│   │   └── typing.js               => the typing effect on laptop component.
│   ├── about.js                    => the about section
│   ├── analytics.js                => the analytics section
│   ├── blog.js                     => the blog section
│   ├── contact.js                  => the contact section
│   ├── footer.js                   => the footer section
│   ├── header.js                   => the header section
│   ├── layout.js                   => Layout which is a component that wraps all sections.
│   ├── loader.js                   => the loader
│   ├── navigation.js               => the navigation
│   ├── testimonials.js             => the testimonials
│   └── work.js                     => the work section
├── content                         => includes all the content of the website for easy update.
│   ├── about
│   │   └── about.md
│   ├── contact
│   │   └── contact.md
│   ├── header
│   │   └── header.md
│   ├── navigation
│   │   └── navigation.md
│   ├── testimonials
│   │   └── testimonials.md
│   └── work
│   │   └── work.md
├── lib                             => includes functions that are acting like libraries.
│   ├── queryMarkdown.js            => this queries all the markdown files in the content folder.
│   ├── animation.js                => this has all the CSS animations that the website uses.
│   ├── carousel.js                 => this is responsible for the carousels on the website
│   └── isInView.js                 => this checks if a given element is in the view port
├── pages                           => includes all pages that structure the website.
│   ├── _app.js                     => Next.js App component to initialize pages.
│   ├── _document.js                => This custom Component is used to inject things that are the same for all pages in the head.
│   ├── blog.js                     => Blog Page
│   └── index.js                    => Home Page
├── public                          => includes all assets and fonts.
│   ├── brand
│   ├── fonts
│   ├── icons
│   ├── images
│   ├── projects
│   └── favicon.ico
├── styles                          => includes all custom OR global styles and fonts.
│   └── fonts.css
├── theme                           => includes all theme related things.
│   └── media.js
├── .gitignore
├── babel.config.json               => custom babel config that takes care of SVG's and Styled-Components.
├── package.json
├── start-here.md                   => You are here.
├── README.md
└── yarn.lock
```
