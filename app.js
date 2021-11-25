const app = Vue.createApp({
	data() {
		return {
			showBook: 'true',
			title: 'Rich Dad Poor Dad',
			author: 'Robert Kiyosaki',
			age: '74',
			x: 0,
			y: 0
		};
	},
	methods: {
		toogleShowBook() {
			this.showBook = !this.showBook;
		},
		handleEvent(e, data) {
			console.log(e, e.type);
			if (data) {
				console.log(data);
			}
		},
		handleMouseMove(e) {
			this.x = e.offsetX;
			this.y = e.offsetY;
		}
	}
});

app.mount('#app');
