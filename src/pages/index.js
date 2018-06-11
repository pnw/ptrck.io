import React from 'react'
import SubSection from '../components/sub-section'
import Entry from '../components/entry'
import TechList from '../components/tech-list'

export default () =>
    <div>
        <section className="header-section">
            <p>
                Hi, I'm Patrick.
            </p>
            <p>
                I'm a full stack web developer. For years, I traveled around the eastern hemisphere, working remotely,
                but these days you can find me in Boulder, Colorado.
            </p>
            <p>
                I like to build tools that make peoples lives more efficient.
            </p>

            <p>
                You can find me on <a href="https://github.com/pnw">Github</a> or email
                me at <a href="mailto:patrick+1@ptrck.io">patrick@ptrck.io</a> if
                you want to work together, tell me how handsome and clever I am, or just say hi.
            </p>
        </section>

        <SubSection>
            <h2>Work</h2>
            <Entry>
                <h3>MyWorksites</h3>
                <p>
                    A collaboration tool that allows municipal organizations and contractors across New Zealand
                    to manage the lifecycle (at least the bits that require approval from the gub'ment)
                    of roadwork projects.
                </p>
                <TechList techs={['Ember', 'Node', 'Express', 'Loopback', 'Python', 'Postgres', 'Docker']}/>
            </Entry>

            <Entry>
                <h3>Listed Land Use Register</h3>
                <p>
                    An internal application used by a District County in New Zealand.
                    It manages tracts of land that may have been contaminated by hazardous materials.
                </p>
                <TechList techs={['Ember', 'Node', 'Express', 'Loopback', 'MS SQL Server']}/>
            </Entry>

            <Entry>
                <h3>TIMPA</h3>
                <p>
                    Used internally by the city council organization of the same acronym.
                    It streamlines their meetings by digesting municipal data and allowing them to
                    review, organize, make decisions about, and prepare for roadworks throughout their city.
                </p>
                <p>
                    Looking back, we probably should have named it
                    Advanced TIMPA Meeting Streamliner Pro ™ or something cooler.
                </p>
                <TechList techs={['Ember', 'Node', 'Express', 'Loopback', 'Postgres']}/>
            </Entry>

            <Entry>
                <h3>University of <span className={"redacted"}>Redacted</span> Enrolment Portal</h3>
                <p>
                    Student enrolment portal for a New Zealand university I'm not allowed to name drop.
                </p>
                <TechList techs={['Angular']}/>
            </Entry>

            <Entry>
                <h3>Contracts</h3>
                <p>
                    An internal tool used by a New Zealand district county to, you guessed it,
                    manage the lifecycle of third-party contracts.
                </p>
                <p>
                    I think we forgot to actually give this one a real name...
                </p>
                <TechList techs={['Ember', 'Node', 'Express', 'Loopback', 'MS SQL Server']}/>
            </Entry>

            <Entry>
                <h3>Pozly</h3>
                <p>
                    Second startup.
                    Pozly was a bootstrapped, multi-platform, Point-of-Sale SAAS product for retail renal businesses.
                    It was a Point-of-Sale product that handles the complexity of managing rental, hire, and lease
                    inventory and workflows.
                </p>
                <TechList techs={['Ember', 'iOS', 'Python', 'Django', 'Node', 'Express', 'Redis', 'Postgres']}/>
            </Entry>

            <Entry>
                <h3>Levr</h3>
                <p>
                    First startup.
                    Levr was a location-based mobile application to share and discover local deals and promotions.
                </p>
                <TechList techs={['JQuery', 'Python', 'Postgres', 'iOS', 'Android']}/>
            </Entry>
        </SubSection>

        <SubSection>
            <h2>Projects</h2>
            <p>These are some of the projects that I've built (or am building) for myself.</p>

            <Entry>
                <h3>Jiggl</h3>
                <p>
                    Why spend minutes on timesheet logging and invoicing when you can spend hours hacking together a
                    custom data-connector/automation-tool to do it for you?
                    Yes, there are other connectors between Jira and Toggle,
                    but I had some other ideas about user experience and workflow.
                </p>
                <p>Jira + Toggl = Jiggl. Heh.</p>
                <TechList techs={['Ember', 'Python', 'Flask']}/>
            </Entry>

            <Entry>
                <h3>Env Tracker</h3>
                <p>
                    If you're a web developer, you probably have some files in your project that you want to keep hidden
                    from source control à la <samp>.gitignore</samp>.
                    These might have names like <samp>.env</samp> and they store things like passwords and api keys.
                    Not having source control on those files kind of sucks.
                </p>
                <p>
                    Env Tracker is a CLI tool that adds private source control to your private files so you don't lose
                    them.
                </p>
                <TechList techs={['Python', 'Click.py']}/>
                <a href="https://github.com/pnw/env-tracker">Source</a>
            </Entry>

            <Entry>
                <h3>Crypto-Currency Trading Bot</h3>
                <p>
                    DIY algorithmic and arbitrage crypto-currency trading bot.
                </p>
                <TechList techs={['Python', 'Click.py', 'Redis', 'Postgres', 'Docker']}/>
            </Entry>

            <Entry>
                <h3>Hacker News: Hide Old Comments</h3>
                <p>
                    A simple Chrome browser extention that allows you to automatically collapse old comment threads
                    when you revisit an interesting discussion.
                </p>
                <TechList techs={['Vanilla Javascript']}/>
                <p>
                    <a href="https://github.com/pnw/hn-hide-old-comments">Source</a>
                </p>
                <p>
                    <a href="https://chrome.google.com/webstore/detail/hacker-news-hide-old-comm/lghlghkblilphbcnnpnkppioflceamjj">
                        Chrome Web Store
                    </a>
                </p>
            </Entry>

            <Entry>
                <h3>"Dye Tracing" Personal Data</h3>
                <p>
                    <a href="https://en.wikipedia.org/wiki/Dye_tracing">Dye Tracing</a> is a method used
                    (among other applications) to discover the exit point of an underground river.
                    The general idea is you dump a bunch of dye into an underground river and, well, see where it comes
                    out.
                    (Sometimes people use ping pong balls instead of dye, but "Ping Pong Balling Personal Data"
                    didn't make it past my personal marketing department that I totally have.)
                </p>
                <p>
                    Inspired by the likes of <a href="https://haveibeenpwned.com/">have i been pwned</a> and
                    the <a href="https://gmail.googleblog.com/2008/03/2-hidden-ways-to-get-more-from-your.html">
                    "+" sign email hack
                </a>, this is an ongoing experiment to answer the question,
                </p>
                <blockquote>
                    "What happens when I put my information online?"
                </blockquote>
                <p>
                    The general idea is to sign up to a bunch of websites with unique emails, turn off the spam filter,
                    and see what comes out the other side.
                </p>
                <p>
                    If this interests you or if you have some ideas or if you want to
                    discuss, <a href="mailto:patrick+2@ptrck.io">contact me</a>!
                </p>
            </Entry>

            <Entry>
                <h3>ptrck.io</h3>
                <p>You're looking at it. I'm only including it here to tell you that I built it with...</p>
                <TechList techs={['Gatsby', 'Github Pages']}/>
            </Entry>
        </SubSection>

        <SubSection>
            <h2>Other</h2>
            <Entry>
                <h3>Kiwi PyCon 2015, Christchurch NZ</h3>
                <p>
                    Was on the organizing committee. Shout out to the New Zealand Python User Group (NZPUG) and
                    especially the Christchurch chapter for the awesome convention!
                </p>
            </Entry>
        </SubSection>
    </div>
