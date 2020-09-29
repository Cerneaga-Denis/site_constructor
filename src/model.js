import image from './assets/image.png'
import { TitleBlock, ImageBlock, TextColumnsBlock, TextBlock } from './classes/blocks'

export const model = [
  new TitleBlock('Test title', {
    tag: 'h1',
    styles: 'background: gray; color: #fff; text-align: center'
  }),
  new ImageBlock(image, {
    styles: 'display:flex; justify-content:center',
    imageStyles: 'margin: 1rem 0; width: 600px; height: auto',
    alt: 'my image'
  }),
  new TextBlock('Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad debitis tempora vel enim reprehenderit dolores excepturi minima, quidem porro error?', {
    styles: 'text-align: left; text-indent: 1rem'
  }),
  new TextColumnsBlock([
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad debitis tempora vel enim reprehenderit dolores excepturi minima, quidem porro error?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad debitis tempora vel enim reprehenderit dolores excepturi minima, quidem porro error?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad debitis tempora vel enim reprehenderit dolores excepturi minima, quidem porro error?'
  ], {
    styles: 'background: lightgray; color: #000; margin: 1rem; text-align: left; text-indent: 1rem'
  })
]