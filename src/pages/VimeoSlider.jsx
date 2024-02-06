import { Loader } from 'components';
import Slider from 'components/Slider/Slider';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const VimeoSlider = () => {
  return (
    <div>
      VimeoSlider
      <Suspense fallback={<Loader />}>
        <Slider />
      </Suspense>
      <Outlet />
    </div>
  );
};

export default VimeoSlider;
