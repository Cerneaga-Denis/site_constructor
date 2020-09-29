import { row, colSm } from '../utils'

export class Block {
  constructor(value, options) {
    this.value = value
    this.options = options
  }

  toHTML() {
    throw new Error('Method "toHTML()" must be realized!')
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    const { tag, styles } = this.options
    return row(
      colSm(`<${tag}>${this.value}<${tag}>`)
      , styles)
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    const { styles, imageStyles, alt } = this.options
    return row(`<img src='${this.value}' style='${imageStyles}' alt='${alt}'>`, styles)
  }
}
export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    return row(
      colSm(`<p style="margin-bottom: 0">${this.value}</p>`)
      , this.options.styles)
  }
}

export class TextColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    const html = this.value.map(item => colSm(`<p>${item}</p>`, this.options.styles))
    return row(html.join(''))
  }
}