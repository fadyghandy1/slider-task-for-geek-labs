
import React from 'react';
import GallerySlider from './components/slides/GallerySlider';

import './App.css';

function App() {

  const slide = [
    {
      image: 'https://picsum.photos/id/1020/800/800/',
      title: 'Image 1',
      description: 'this is image 1 description about',
    },
    {
      image: 'https://picsum.photos/id/1014/800/800/',
      title: 'Image 2',
      description: 'this is image 2 description about',
    },
    {
      image: 'https://picsum.photos/id/1018/800/800/',
      title: 'Image 3',
      description: 'this is image 3 description about',
    },
    {
      image: 'https://picsum.photos/id/1015/800/800/',
      title: 'Image 4',
      description: 'this is image 4 description about',
    },
    {
      image: 'https://picsum.photos/id/1019/800/800/',
      title: 'Image 5',
      description: 'this is image 5 description about',
    },{
      image: 'https://picsum.photos/id/1018/800/800/',
      title: 'Image 3',
      description: 'this is image 3 description about',
    },
    
  ]
  return (
    <div className="App">
        <GallerySlider slideImages={slide} />
    
    </div>
  );
}

export default App;




