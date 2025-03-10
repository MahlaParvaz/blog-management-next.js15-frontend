'use client';
import BeatLoader from 'react-spinners/BeatLoader';

function Loading({ width = '24' }) {
  return (
    <BeatLoader
      size={width}
      color="#4a6dff"
      cssOverride={{
        display: 'flex',
        justifyContent: 'center',
      }}
    />
  );
}
export default Loading;
