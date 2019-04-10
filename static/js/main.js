// New VueJs instance
new Vue({
    //CSS selector of the root DOM element
    el: "#notebook",

    // Some data
    data() {
        return {
            content: "I'm in **bold**!",
            // New! A note array
            notes: [],
        }
    },
    // Computed properties
    computed: {
        notePreview (){
            // Markdown rendered to HTML
            return marked(this.content)
        },
    },
    addButtonTitle () {
        return notes.length + ' note(s) already'
    },
    // Chage watchers
    watch: {
        // Watchig 'content' data property
        content: 'saveNote',
        },
    // DRY content- Don't repeat yourself
    methods: {
        // vue function
        saveNote () {
            console.log('saving note: ', this.content)
            localStorage.setItem('content', this.content)
            this.reportOperation('saving')
        },
        // Add a note with some default content and select it
        addNote () {
            const time = Date.now()
            // Default new note
            const note = {
                id: String(time),
                title: 'New note ' + (this.notes.length + 1),
                content: "**Hi!** This notebook is using [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for formatting!",
                created: time,
                favorite: false,
            }
            // Add to the list
            this.notes.push(note)
        },
        
        reportOperation (opName) {
            console.log('The', opName, 'operation was completed!')
        },
    },
    // This will be called when the instance is ready - called is a hook
    created() {
        // Set the content to the stored value
        // or to a default string if nothing was saved
        this.content = localStorage.getItem('content') || 'You can write in **markdown**'
    },
})
