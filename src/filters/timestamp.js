export default function(num) {
	let date = new Date(num);
	let Y = date.getFullYear();
	let M = date.getMonth();
	let D = date.getDate();
	return `${Y}/${M}/${D}`;
}
