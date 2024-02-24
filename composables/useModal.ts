export default function () {
  const isOpen = useState('is-modal-open', () => false)
  const view = useState('modal-view')
  const title = useState<string>('modal-title', () => 'Defaul title')

	function open (modalView: object, modalTitle?: string) {
    if (modalTitle) title.value = modalTitle
    view.value = markRaw(modalView)
    isOpen.value = true
  }

  function close () {
    isOpen.value = false
  }

	return {
    open,
    close,
  }
}