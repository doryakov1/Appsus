import emailPreview from '../cmps/email-preview.cmp.js'


export default {
    template: `
            <section class="email-list">
                <email-preview 
                    v-for="currentEmail in emails"  
                    :key="currentEmail.id" 
                    :email="currentEmail">
                </email-preview>
            </section>
    `,
    props: ['emails'],
    components: {
        emailPreview
    },
    methods: {},

}