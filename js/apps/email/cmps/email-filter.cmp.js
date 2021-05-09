export default {
    template: `
        <section class="email-filter">
            <input type="text" placeholder="Filter By Email" v-model="filterBy.txt" @input="emitFilter" />
            <select @change="emitFilter" v-model="filterBy.selected">
            <option value="">All</option>
            <option value="true">Read</option>
            <option value="false">Unread</option>
          </select>
        </section>
    `,
    data() {
        return {
            filterBy: {
                txt: '',
                selected: '',
                folder: ''
            }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('set-filter', this.filterBy);
        },
        setFolder(folder) {
            this.filterBy.folder = folder;
            this.$emit('set-filter', this.filterBy);

        }
    }
}