const main = document.querySelector('main');
const btns = main.querySelectorAll('li');
const boxs = main.querySelectorAll('article');

btns.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		console.log(e.currentTarget);

		console.log(e.target);
		//e.currentTarget:js이벤트 구문에 연결되어 있는선택
		//e.target:실제 화면상에서 이벤트가 발생한 대상선택
		//만약 연결되어있는 선택자가 a의 링크 이동처럼 특정기능이 있는 요소면 해당기능 막아야될 필요 있음.
		e.preventDefault(); //링크기능 막고 스크립트 기능 우선시
		if (e.currentTarget.classList.contains('on')) return;
		[btns, boxs].forEach((el) => {
			activation(el, idx);
		});
	});
});
function activation(arr, index) {
	console.log('activation');
	arr.forEach((el) => el.classList.remove('on'));
	arr[index].classList.add('on');
}
