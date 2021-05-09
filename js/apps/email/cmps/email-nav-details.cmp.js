export default {
    template: `
                <section class="email-details-nav">
                    <router-link to="/email"> 
                    <i class="material-icons">
                    arrow_back
                    </i>
                    </router-link>
                    <router-link to="/email"> 
                    <i @click="onEmailDelete" class="material-icons">
                    delete
                    </i>
                    </router-link>
                </section>
    `,
    methods: {
        onEmailDelete() {
            this.$emit('deleteEmail');
        }
    }
}