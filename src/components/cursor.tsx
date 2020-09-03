import React, { useEffect } from 'react';
import gsap from 'gsap';

function Cursor() {

  /**
   * move the cursor
   * @param {MouseEvent} event the mouse event
   * @return {void}
   */
  function onMouseMove(event: MouseEvent) {
    const bigCircle = document.querySelector('.cursor__circle--big');
    const smallCircle = document.querySelector('.cursor__circle--small');

    gsap.to(bigCircle, .4, {
      x: event.clientX,
      y: event.clientY
    })

    gsap.to(smallCircle, .1, {
      x: event.clientX,
      y: event.clientY
    })
  }

  /**
   * animation for in - hover an element
   * return {void}
   */
  function onMouseHover() {
    const bigCircle = document.getElementById('bigCircle');
    gsap.to(bigCircle, {
      attr: {
        r: 25
      }
    })
  }

  /**
   * animation for out - hover an element
   * return {void}
   */
  function onMouseHoverOut() {
    const bigCircle = document.getElementById('bigCircle');
    gsap.to(bigCircle, {
      attr: {
        r: 18
      }
    })
  }

  /**
   * add event listener for each element
   * return {void}
   */
  function setHoverable() {
    const hoverables = document.querySelectorAll('.hoverable');
    for (let i = 0; i < hoverables.length; i++) {
      hoverables[i].addEventListener('mouseenter', onMouseHover);
      hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
    }
  }

  useEffect(() => {
    window.addEventListener('DOMContentLoaded', () => {
      // Listeners
      document.body.addEventListener('mousemove', onMouseMove);
      // set hover elem
      setHoverable();
    });
  }, [])

  return (
    <div className='cursor'>
      <div className="cursor__circle cursor__circle--big">
        <svg height="60" width="60">
          <circle id="bigCircle" cx="30" cy="30" r="18" strokeWidth="0.8"> </circle>
        </svg>
      </div>

      <div className="cursor_circle cursor__circle--small">
        <svg height="10" width="10">
          <circle cx="4" cy="4" r="3" strokeWidth="0"> </circle>
        </svg>
      </div>
    </div>
  )
}

export default Cursor;
