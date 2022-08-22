<template>
    <div>
        <!-- books: { items: [] } -->
<!-- <h1>books</h1>
        <div id = "books">
            <div id = "book-name"><input type="text" name="" v-model = "bookName"></div>
            <div id = "book-button" @click = "fetchBook"><button>Choose book</button></div>
            {{ books }}
            <div class = "book" >
                <div class = "book-title">{{ books }}</div>
            </div>
        </div> -->

        <!-- <div class="book" v-for="(book, index) in books.items"> -->
            <!-- <div class="book" v-for="(book, index) in books.items"> -->
    <!-- <div class = "book-title">{{ book.volumeInfo.title }}</div> -->
        <!-- </div> -->
    </div>
</template>

<script>
export default {
    name: "CompJson",
    data() {
        return {
            bookName: '',
            books: { items: [] }
        }
    },
    // fetch('@/todo.JSON')
    //         .then(result => result.json())
    //         .then(data => {
    //               this.todos = data.contents;
    //         }),
    methods: {
        fetchBook() {
            let book = this.bookName;
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}`, {
                method: 'GET'
            }).then(
                response => response.json())
                .then(json => this.books = json)
        }
    }
}
</script>

<style scoped>

</style>