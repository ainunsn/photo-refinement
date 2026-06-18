import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'


export default function ComparisonSlider({
  original,
  enhanced,
}: {
  original: string;
  enhanced: string;
}) {
  return (
    <div className='mx-auto max-w-4xl overflow-hidden rounded-2xl border shadow-sm'>
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src={original}
            alt='Original'
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={enhanced}
            alt='Enhanced'
          />
        }


      />
    </div>
  )
}