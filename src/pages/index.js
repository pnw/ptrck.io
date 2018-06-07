import React from 'react'
import SubSection from '../components/sub-section'
import Entry from '../components/entry'
import TechList from '../components/tech-list'

export default () =>
    <div>
        <SubSection>
            <h1>ptrck.io</h1>
            <p>
                Nihil optio rerum dolorem sit ducimus fuga optio. Autem quasi quis quidem voluptatem voluptatem maxime
                distinctio ratione. Impedit molestiae hic omnis magnam et sequi. Voluptatem qui eos harum.
                Mostly I like to build tools that make peoples lives more efficient.
            </p>

        </SubSection>

        <SubSection>
            <h2>Work</h2>
            <Entry>
                <h3>My Worksites</h3>
                <p>
                    A tool used by municipal organizations and contractors across New Zealand.
                    It's used
                </p>
                <TechList techs={['Ember', 'Node', 'Express', 'Loopback', 'Python', 'Postgres', 'Docker']}/>
            </Entry>

            <Entry>
                <h3>Listed Land Use Register (LLUR)</h3>
                <p>
                    An internal application used by the Marlborough District County Environmental Department. It
                    is used to manage tracts of land that may have been contaminated by hazardous materials.
                </p>
                <TechList techs={['Ember', 'Node', 'Express', 'Loopback', 'MS SQL Server']}/>
            </Entry>

            <Entry>
                <h3>TIMPA Meeting Tool</h3>
                <p>
                    A... erm... meeting tool. Used internally during meetings by the city council
                    organization of the same acronym.
                    It streamlines their meetings by digesting municipal data into a simple interface where
                    they review, organize, make decisions about, and prepare for
                    upcoming roadwork throughout their city.
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
                    Build in collaboration with another vendor who provided the backend.
                </p>
                <TechList techs={['Angular']}/>
            </Entry>

            <Entry>
                <h3>Contracts</h3>
                <p>
                    An internal tool used by a New Zealand district county to, you guessed it,
                    manage the lifecycle of third-party contracts.
                </p>
                <p>Unfortunately there was no need for a flashy acronymous name.</p>
                <TechList techs={['Ember', 'Node', 'Express', 'Loopback', 'MS SQL Server']}/>
            </Entry>

            <Entry>
                <h3>Pozly</h3>
                <p>
                    Second startup.
                    Pozly was a bootstrapped, multi-platform SAAS product for retail renal businesses.
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
                <p>Jira + Toggl = Jiggl. Heh.</p>
                <p>
                    Why spend minutes on timesheet logging and invoicing when you can spend hours hacking together a
                    custom data-connector/automation-tool to do it for you?
                    Yes, there are other connectors between Jira and Toggle, but they didn't quite fit.
                </p>

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
                    when you revisit an interesting discussion
                </p>
                <TechList techs={['Vanilla Javascript']}/>
                <a href="https://github.com/pnw/hn-hide-old-comments">Source</a>
            </Entry>

            <Entry>
                <h3>"Dye Tracing" Personal Data</h3>
                <p>
                    This is less of a "thing" I'm building and more of an experiment to answer the question,
                </p>
                <blockquote>
                    "What happens when I put my information online?"
                </blockquote>
                <p>
                    Inspired by the likes of <a href="https://haveibeenpwned.com/">have i been pwned</a> and
                    the <a href="https://gmail.googleblog.com/2008/03/2-hidden-ways-to-get-more-from-your.html">
                    "+" sign email hack
                </a>.
                </p>
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
        <SubSection>
            <h2>Contact</h2>
        </SubSection>
    </div>
