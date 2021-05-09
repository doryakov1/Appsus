import { utilService } from '../../../services/util.service.js'



export default {
    template: `
        <section class="email-send">
            <div class="send-email-header"><h4>New Email</h4><span @click="closeModal">x</span></div>
            <form @submit.stop="submitEmail">
            <input type="text" v-model="email.subject" class="email-subject" placeholder="Subject"/>
            <input type="text" v-model="email.to" class="email-to" placeholder="To"/>
            <textarea  v-model="email.message" class="email-message" placeholder="Message"></Textarea>
            <button>Send</button>
        </form>
        </section>
    `,
    data() {
        return {
            email: {
                subject: '',
                to: '',
                from: 'me@gmail.com',
                message: '',
                id: utilService.makeId(),
                date: utilService.getDate(),
                isRead: false,
                isFavor: false,
                isDeleted: false,
            }
        }
    },
    methods: {
        submitEmail() {
            this.$emit('email', this.email);

        },
        closeModal() {
            this.$emit('closeSend');
        }
    },
}