export default class ImageSlider {
  #currentPostion = 0;

  #slideNumber = 0;

  #slideWidth = 0;

  #intervalId;

  #autoPlay = true;

  sliderWrapEl;

  sliderListEl;

  nextBtnEl;

  previousBtnEl;

  indicatorWrapEl;

  controlWrapEl;

  constructor() {
    this.assignElement();
    this.initSliderNumber(); // slider에 들어갈 이미지 갯수
    this.initSlideWidth(); // ul width
    this.initSliderListWidth(); // slider 총 길이 계산
    this.addEvent();
    this.createIndicator();
    this.setIndicator();
    this.initAutoPlay();
  }

  assignElement() {
    this.sliderWrapEl = document.getElementById('slider-wrap');
    this.sliderListEl = this.sliderWrapEl.querySelector('#slider');
    this.nextBtnEl = this.sliderWrapEl.querySelector('#next');
    this.previousBtnEl = this.sliderWrapEl.querySelector('#previous');
    this.indicatorWrapEl = this.sliderWrapEl.querySelector('#indicator-wrap');
    this.controlWrapEl = this.sliderWrapEl.querySelector('#control-wrap');
  }

  initAutoPlay() {
    /* 
    #1. page load - Interval을 3초 간격으로 설정
    */
    this.#intervalId = setInterval(this.moveToRight.bind(this), 3000);
  }
  initSliderNumber() {
    /* 
    #2. slider내 이미지 갯수 파악
    */
    this.#slideNumber = this.sliderListEl.querySelectorAll('li').length;
  }
  initSlideWidth() {
    /* 
    #3. slider ul 태그의 clientWidth 파악
    */
    this.#slideWidth = this.sliderListEl.clientWidth;
  }
  initSliderListWidth() {
    /* 
    #4. 오른쪽으로 나열된 이미지의 총 너비 계산 
    */
    this.sliderListEl.style.width = `${this.#slideNumber * this.#slideWidth}px`;
  }
  addEvent() {
    this.nextBtnEl.addEventListener('click', this.moveToRight.bind(this));
    this.previousBtnEl.addEventListener('click', this.moveToLeft.bind(this));
    this.indicatorWrapEl.addEventListener(
      'click',
      this.onClickIndicator.bind(this),
    );
    this.controlWrapEl.addEventListener('click', this.togglePlay.bind(this));
  }
  togglePlay(event) {
    /* 
    #5. 우측하단 play-pause 버튼 조작
    - dataset.status === 'play' ?? controlWrap에 play 속성 주기
    - AutoPlay 함수 실행

    - dataset.status === 'pause' ?? controlWrap에 pause 속성 주기
    - AutoPlay 함수 실행
    */
    if (event.target.dataset.status === 'play') {
      this.#autoPlay = true;
      this.controlWrapEl.classList.add('play');
      this.controlWrapEl.classList.remove('pause');
      this.initAutoPlay();
    } else if (event.target.dataset.status === 'pause') {
      this.#autoPlay = false;
      this.controlWrapEl.classList.remove('play');
      this.controlWrapEl.classList.add('pause');
      clearInterval(this.#intervalId);
    }
  }
  onClickIndicator(event) {
    /* 
    #6. Indicator 버튼 클릭시 실행
    - 클릭된 li의 index 파악
    - index가 Number 라면 
      1. 현재 위치를 currentPosition에 저장
      2. slider ul의 위치 조작
      3. indicator 함수 실행
    */
    const indexPosition = parseInt(event.target.dataset.index, 10);
    if (Number.isInteger(indexPosition)) {
      this.#currentPostion = indexPosition;
      this.sliderListEl.style.left = `-${
        this.#slideWidth * this.#currentPostion
      }px`;
      this.setIndicator();
    }
  }
  moveToRight() {
    /* 
    #7. 오른쪽 화살표 버튼 클릭시 실행
    - 현재 위치를 +1 
    - (마지막 image 까지 도달했을때 현재 위치를 0으로 설정)
    - slider ul의 위치 조작
    - Auto Play 재 조작
      1. 실행중인 Interval 지움
      2. Interval을 3초 간격으로 설정
    */
    this.#currentPostion += 1;
    if (this.#currentPostion === this.#slideNumber) {
      this.#currentPostion = 0;
    }
    this.sliderListEl.style.left = `-${
      this.#slideWidth * this.#currentPostion
    }px`;
    if (this.#autoPlay) {
      clearInterval(this.#intervalId);
      this.#intervalId = setInterval(this.moveToRight.bind(this), 3000);
    }
    this.setIndicator();
  }
  moveToLeft() {
    this.#currentPostion -= 1;
    if (this.#currentPostion === -1) {
      this.#currentPostion = this.#slideNumber - 1;
    }
    this.sliderListEl.style.left = `-${
      this.#slideWidth * this.#currentPostion
    }px`;
    if (this.#autoPlay) {
      clearInterval(this.#intervalId);
      this.#intervalId = setInterval(this.moveToRight.bind(this), 3000);
    }
    this.setIndicator();
  }
  createIndicator() {
    /* 
    #8. 하단 Indicator의 li 요소 생성
    */
    const docFragment = document.createDocumentFragment();
    for (let i = 0; i < this.#slideNumber; i++) {
      const li = document.createElement('li');
      li.dataset.index = i;
      docFragment.appendChild(li);
    }
    this.indicatorWrapEl.querySelector('ul').appendChild(docFragment);
  }
  setIndicator() {
    /* 
    #9. Image index가 바뀐경우 Indicator를 새로 그려줌
    */
    this.indicatorWrapEl.querySelector('li.active')?.classList.remove('active');
    this.indicatorWrapEl
      .querySelector(`ul li:nth-child(${this.#currentPostion + 1})`)
      .classList.add('active');
  }
}
