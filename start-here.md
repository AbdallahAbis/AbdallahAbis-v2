```
root                                => the root of the project/repo
├── components                      => includes all the building blocks of the website
│   ├── custom                      => includes all the custom components that are being used by other components in different ways.
│   │   ├── button.js
│   │   ├── headline.js
│   │   └── paragraph.js
│   ├── inner-components            => includes all the components that are inserted inside other components.
│   │   ├── computer.js
│   │   ├── hamburgerMenu.js
│   │   ├── nav-options.js
│   │   └── typing.js
│   ├── about.js
│   ├── analytics.js
│   ├── blog.js
│   ├── contact.js
│   ├── footer.js
│   ├── header.js
│   ├── layout.js
│   ├── loader.js
│   ├── navigation.js
│   ├── testimonials.js
│   └── work.js
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
│   ├── queryMarkdown.js
│   ├── animation.js
│   ├── carousel.js
│   ├── isInView.js
│   └── useDeviceDetect.js
├── pages                           => includes all pages that structure the website.
│   ├── _app.js
│   ├── _document.js
│   ├── blog.js
│   └── index.js
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
├── babel.config.json
├── package.json
├── start-here.md                   => You are here.
├── README.md
└── yarn.lock
```
