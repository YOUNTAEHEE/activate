const main = document.querySelector('main');
const btns = main.querySelectorAll('li');
const boxs = main.querySelectorAll('article');

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		//직전의 모든 요소 초기화
		btns.forEach((el) => el.classList.remove('on'));
		boxs.forEach((el) => el.classList.remove('on'));
		//클릭한 순번에 해당하는 버튼만 활성화
		btns[idx].classList.add('on');
		boxs[idx].classList.add('on');
	});
});
console.dir(btns[0]);
//DOM안에 자주 쓰이는 유용한 property
//DOM.innerText:해당 돔에 연결되어 있는 text값을 확인가능
//DOM.innerHTML:해당 돔에 연결되어 있는 자식 태그 구조를 확인가능
//DOM.className:해당 돔에 연결되어 있는 모든 클래스명을 문자열로 확인가능

//미션 내가 버튼클릭하며 클릭한 버튼의 문자값.
btns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		//클릭시 해당 li의 글자 확인
		console.log(e.currentTarget.innerText);
		//클릭한 li의 글자값을 순번으로 변경(innerText객체의 key이기 때문에 대입연산자로 값 변경 가능)
		e.currentTarget.innerText = idx;
		//클릭한 li의 글자값을 가져와서 <span>으로 감싼 다음에 li에 innerHTML로 등록
		e.currentTarget.innerText = `<span>${e.currentTarget.innerText}</span>`;
	});
});
