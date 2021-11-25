const app = Vue.createApp({
	data() {
		return {
			showBook: 'true',

			books: [
				{
					title: 'Rich Dad poor Dad',
					author: 'Robert Kiyosaki',
					img: '/assets/1.jpeg'
				},
				{
					title: 'Think and Grow Rick',
					author: 'Napoleon Hill',
					img: '/assets/2.jpeg'
				},
				{
					title: 'Richest Man in Babylon',
					author: 'George S. Clason',
					img: '/assets/3.jpeg'
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
