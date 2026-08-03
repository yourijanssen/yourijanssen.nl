"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles, previousLabel, nextLabel }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button
        className={btnStyles}
        onClick={() => swiper.slidePrev()}
        aria-label={previousLabel}
        data-testid="previous-project"
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button
        className={btnStyles}
        onClick={() => swiper.slideNext()}
        aria-label={nextLabel}
        data-testid="next-project"
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
