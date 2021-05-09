import homepageCmp from './pages/home-page.cmp.js'
import emailApp from './apps/email/pages/email-app.cmp.js'
import emailDetails from './apps/email/pages/email-details.cmp.js'


export default [
    { path: '/', component: homepageCmp },
    { path: '/email', component: emailApp },
    { path: '/email/:theEmailId', component: emailDetails },
]