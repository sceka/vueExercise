const app = Vue.createApp({
	data() {
		return {
			showBook: 'true',

			books: [
				{
					title: 'Rich Dad poor Dad',
					author: 'Robert Kiyosaki',
					img: '/assets/1.jpeg',
					isFav: true
				},
				{
					title: 'Think and Grow Rick',
					author: 'Napoleon Hill',
					img: '/assets/2.jpeg',
					isFav: false
				},
				{
					title: 'Richest Man in Babylon',
					author: 'George S. Clason',
					img: '/assets/3.jpeg',
					isFav: true
				}
			]
		};
	},
	methods: {
		toogleShowBook() {
			this.showBook = !this.showBook;
		},
		toogleFavBook(book) {
			book.isFav = !book.isFav;
		}
	},
	computed: {
		filteredBooks() {
			return this.books.filter(book => book.isFav);
		}
	}
});

app.mount('#app');
