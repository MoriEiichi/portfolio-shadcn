import React from 'react';

const VideoPage = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#111' }}>
    <video controls style={{ maxWidth: '90vw', maxHeight: '80vh', background: '#000' }}>
      <source src="/video/testing-movie-with-playwright.mov" type="video/quicktime" />
      お使いのブラウザは動画再生に対応していません。
    </video>
  </div>
);

export default VideoPage; 