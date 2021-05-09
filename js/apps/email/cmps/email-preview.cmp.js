import emailService from '../services/email.service.js'



export default {
    template: `
    <div class="email-preview" :class="{muted: email.isRead}">
    <router-link :to="emailUrl">
            <p class="message">{{email.message}}</p>
            <p>{{email.subject}}</p>
            <p>{{email.from}}</p>
            <p>{{email.date}}</p>
            </router-link>
            <p v-on:click="onEmailDelete"  class="material-icons">
            delete
            </p>
            <p v-on:click="onEmailFavor" v-if=email.isFavor class="material-icons">star</p>
            <p v-on:click="onEmailFavor" v-else class="material-icons">star_border</p>
            <p v-on:click="onEmailRead" v-if=email.isRead  class="material-icons">email</p>
            </div>
    `,
    props: ['email'],
    computed: {
        emailUrl() {
            return '/email/' + this.email.id
        }

    },
    methods: {
        onEmailDelete() {
            emailService.deleteEmail(this.email.id)
        },
        onEmailFavor() {
            emailService.isFavorEmail(this.email)
        },
        onEmailRead() {
            emailService.isReadEmail(this.email)
        }
    }

}