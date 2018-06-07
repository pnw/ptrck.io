import React from 'react'
import '../styles/main.scss'

const TemplateWrapper = ({children}) => (
    <div className={"container"}>
        {children()}
    </div>
)

export default TemplateWrapper