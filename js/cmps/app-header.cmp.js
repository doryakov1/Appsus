import eventBus from '../services/event-bus.js'
// import bookService from '../services/book.service.js'


export default {
    name: 'TheAppHeader',
    template: `
            <header>
                <nav class="main-nav">
                    <router-link class="logo" exact to="/"><div class="stage">
                    <div class="layer"></div>
                  </div></router-link>
                    <div  class="toggle-menu" @click="showTopMenu = !showTopMenu">
                     <div class="main-menu" v-if="!showTopMenu">
                     <div class="main-item-menu">
                      <router-link class="logo-mail" to="/email">
                      </router-link>
                      <router-link class="logo-gplus" to="/email">
                      </router-link>
                      <router-link class="logo-youtube" to="/email">
                      </router-link>
                     </div>
                     </div>
                     <div class="main-item-box" v-else>
                     <i class="material-icons">apps</i
                     </div>
                     </div>
                     </div>

                </nav>
                {{userMsg}}
            </header>     
    `,
    data() {
        return {
            userMsg: null,
            showTopMenu: true
        }
    },
    created() {
        eventBus.$on('show-msg', (msg) => {
                this.userMsg = msg;
            })
            // this.getBook()
    },
    methods: {

        goRoute() {
            // document.querySelector('input').focus()
            // console.log('REFS:', this.$refs);
            this.$refs.txtSearch.focus();
        },
        // getBook() {
        //     bookService.getGoogleBook('blabla').then(books => {
        //         console.log(books)
        //     });
        // }
    },

}