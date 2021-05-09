import emailService from '../services/email.service.js'
import emailList from '../cmps/email-list.cmp.js'
import emailFilter from '../cmps/email-filter.cmp.js'
import emailSend from '../cmps/email-send.cmp.js'


export default {
    template: `
        <section class="email-app">
             <div class="emails">
                <email-filter @set-filter="setFilter"></email-filter>
                <div v-if="showSendMenu">
                <email-send @closeSend = "showSendMenu = false"  @email="submitEmail"></email-send>
               </div>
                <email-list :emails="emailsForDisplay"></email-list>
                <button @click="showSendMenu = true" class="send-button"><img src="img/send.png"></button>

             </div>
        </section>
        `,
    data() {
        return {
            showSendMenu: false,
            filter: null,
            emails: []
        }
    },
    mounted() {
        emailService.query()
            .then(emails => this.emails = emails)
    },
    computed: {
        emailsForDisplay() {
            if (!this.filter) return this.emails;
            else if (this.filter.selected === '') {
                return this.emails.filter(email => email.from.includes(this.filter.txt))
            } else if (this.filter.folder === 'stars') {
                debugger
                return this.emails.filter(email => email.from.includes(this.filter.txt) && email.isFavor)
            }
            return this.emails.filter(email => email.isRead.toString() === this.filter.selected && email.from.includes(this.filter.txt))
        }
    },
    methods: {
        setFilter(filter) {
            this.filter = filter;
        },
        submitEmail(email) {
            emailService.sendEmail(email)
            this.showSendMenu = false;
        },
        closeModal() {
            this.showSendMenu = false;
        }


    },
    components: {
        emailList,
        emailFilter,
        emailSend
    }
}