export function row(content, styles = '') {
  return `<div class='row' style='margin: 0;${styles}'>${content}</div>`
}

export function colSm(content, styles = '') {
  return `<div class='col-sm' style='${styles}'>${content}</div>`
}