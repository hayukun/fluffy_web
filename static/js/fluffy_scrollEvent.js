const targetElements = [
    {
      id: 'scrolltarget-1',
      animated: false
    },
    {
      id: 'scrolltarget-2',
      animated: false
    },
    {
      id: 'scrolltarget-3',
      animated: false
    },
    {
      id: 'scrolltarget-4',
      animated: false
    },
    {
      id: 'scrolltarget-5',
      animated: false
    }
  ];
  
  window.addEventListener('scroll', function() {
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY + windowHeight * (3 / 5); // 画面下部から三分の一の高さ
    console.log("scroll:" + scrollPosition);
    targetElements.forEach((target) => {
      const targetElement = document.getElementById(target.id);
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const targetOffset = windowHeight / 5; // 画面の高さの三分の一
      console.log("boarder:" + (targetPosition - targetOffset));
      if (!target.animated && scrollPosition >= targetPosition - targetOffset) {
        targetElement.classList.add('animate');
        target.animated = true;
      }
    });
  });