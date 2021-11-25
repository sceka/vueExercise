const app = Vue.createApp({
	data() {
		return {
			showBook: 'true',

			books: [
				{
					title: 'Rich Dad poor Dad',
					author: 'Robert Kiyosaki'
				},
				{
					title: 'Think and Grow Rick',
					author: 'Napoleon Hill'
				},
				{
					title: 'Richest Man in Babylon',
					author: 'George S. Clason'
				}
			]
		};
	},
	methods: {
		toogleShowBook() {
			this.showBook = !this.showBook;
		}
	}
});

app.mount('#app');
