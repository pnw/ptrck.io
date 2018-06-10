import React from 'react'
import '../styles/main.scss'
import Helmet from 'react-helmet'

const TemplateWrapper = ({children}) => (
    <div>
        <Helmet
            title="Patrick | Bootstrapper, Developer, Entrepreneur"
            meta={[
                {name: "msapplication-TileColor", content: "#ff6347"},
                {name: "msapplication-TileImage", content: "/favicons/ms-icon-144x144.png"},
                {name: "theme-color", content: "#ff6347"},
                {name: 'description', content: 'Patrick is a full stack web developer based in Boulder, Colorado.' },
                {name: 'robots', content: 'index, follow' },
                // {name: 'google-site-verification', content: '' },
                {property: 'og:url', content: 'http://ptrck.io' },
                {property: 'og:type', content: 'website' },
                {property: 'og:title', content: 'ptrck.io | Bootstrapper, Developer, Entrepreneur' },
                {property: 'og:description', content: 'Patrick is a full stack web developer based in Boulder, Colorado.' },
                {property: 'og:site_name', content: 'ptrck.io' },
                {property: 'og:locale', content: 'en_US' },
                {name: 'twitter:card', content: 'summary' },
                {name: 'twitter:site', content: '@patrick_nilsen' },
                {name: 'twitter:url', content: 'http://ptrck.io' },
                {name: 'twitter:title', content: 'ptrck.io' },
                {name: 'twitter:description', content: 'Patrick is a full stack web developer based in Boulder, Colorado.' },
            ]}
            link={[
                {rel: "apple-touch-icon", sizes: "57x57", href: "/favicons/apple-icon-57x57.png"},
                {rel: "apple-touch-icon", sizes: "60x60", href: "/favicons/apple-icon-60x60.png"},
                {rel: "apple-touch-icon", sizes: "72x72", href: "/favicons/apple-icon-72x72.png"},
                {rel: "apple-touch-icon", sizes: "76x76", href: "/favicons/apple-icon-76x76.png"},
                {rel: "apple-touch-icon", sizes: "114x114", href: "/favicons/apple-icon-114x114.png"},
                {rel: "apple-touch-icon", sizes: "120x120", href: "/favicons/apple-icon-120x120.png"},
                {rel: "apple-touch-icon", sizes: "144x144", href: "/favicons/apple-icon-144x144.png"},
                {rel: "apple-touch-icon", sizes: "152x152", href: "/favicons/apple-icon-152x152.png"},
                {rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-icon-180x180.png"},
                {rel: "icon", type: "image/png", sizes: "192x192", href: "/favicons/android-icon-192x192.png"},
                {rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png"},
                {rel: "icon", type: "image/png", sizes: "96x96", href: "/favicons/favicon-96x96.png"},
                {rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png"},
                {rel: "manifest", href: "/favicons/manifest.json"}
            ]}

        />
        <div className={"container"}>
            <h1>ptrck<span className="colorful">.</span>io</h1>
            {children()}
        </div>
    </div>
)

export default TemplateWrapper