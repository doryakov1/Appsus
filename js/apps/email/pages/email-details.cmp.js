import emailService from '../services/email.service.js'
import emailNavDetails from '../cmps/email-nav-details.cmp.js'


export default {
    template: `
     <section class="email-main-details" v-if="email">
        <email-nav-details @deleteEmail = "onEmailDelete">
        </email-nav-details>
        <div class="email-details">
        <div>
        <h1>{{email.subject}}</h1>
        <h4>{{email.date}}</h4>
        </div>
        <h4>{{email.from}}</h4>
        <h4>{{email.message}}</h4>
        </div>
     </section>
    `,
    data() {
        return {
            email: null,
        }
    },

    created() {
        const emailId = this.$route.params.theEmailId;
        emailService.getById(emailId)
            .then(email => {
                this.email = email
            })

    },
    methods: {
        onEmailDelete() {
            emailService.deleteEmail(this.email.id)
        }
    },
    components: {
        emailNavDetails
    }
}