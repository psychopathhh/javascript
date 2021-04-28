const App = {
    data() {
        return {
            title: 'Список заметок',
            placeholderString: 'Введите название заметки',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        addNewNote() {
            if(this.inputValue !==''){
                this.notes.push(this.inputValue);
                this.inputValue = '';
            }
        },
        /* inputKeyPress(event) {
            if(event.key === 'Enter') {
                this.addNewNote();
            }
        }  */ 
        deleteNote(idx){
            this.notes.splice(idx, 1)
        },
        toUpperCase(item){
            return item.toUpperCase();
        }
    },
    computed: {
        doubleCountComputed() {
            return this.notes.length * 2;
        },
    },
    watch: {
        inputValue(value) {
            if(value.length > 30) {
                this.inputValue = ''
            }
        }
    }
}

Vue.createApp(App).mount('#app')