import Editor from '@toast-ui/editor'

export default class ToastEditor {
  editor: Editor

  constructor(el: string, height: string, initialValue: string) {
    this.editor = new Editor({
      el: document.querySelector(el)!,
      height,
      initialValue,
      previewStyle: 'vertical',
      initialEditType: 'markdown',
      toolbarItems: this.toolbar(),
    })
    this.editor.getMarkdown()
    this.uploadImage()
  }

  private uploadImage() {
    this.editor.removeHook('addImageBlobHook')
    this.editor.addHook('addImageBlobHook', (type, handle) => {
      const formData = new FormData()
      formData.append('file', type, type.name)
      handle('Server return image url', type.name)
    })
  }

  private toolbar() {
    return [
      ['heading', 'bold', 'italic', 'strike'],
      ['hr', 'quote'],
      ['ul', 'ol', 'task', 'indent', 'outdent'],
      ['table', 'image', 'link'],
      ['code', 'codeblock'],
      [
        {
          name: 'fullscreen',
          el: this.fullscreen(),
        },
      ],
    ]
  }

  private fullscreen() {
    const button = document.createElement('button')
    button.style.backgroundImage = 'none'
    button.style.margin = '0'
    button.style.flexWrap = 'no'
    button.innerHTML = `全屏`

    button.addEventListener('click', () => {
      this.editor.setHeight('100vh')
      this.toggle(button)
    })

    return button
  }

  private toggle(el: HTMLButtonElement) {
    const ui = document.querySelector('.toastui-editor-defaultUI') as HTMLDivElement
    ui.classList.toggle('fullscreen')

    if (ui.classList.length == 2) {
      el.innerHTML = `退出全屏`
    } else {
      el.innerHTML = `全屏`
    }
  }
}
