export default function () {
  const isOpen = useState('modal-is-open', () => false)
  const view = useState('modal-view')
  const title = useState<string>('modal-title', () => 'Defaul title')
  const closable = useState<boolean>('modal-closable', () => false)
  const closableFromOutside = useState<boolean>('modal-closable-from-outside', () => false)

	function open (modalView: object, modalTitle: string, isModalClosable: boolean, isModalClosableFromOutside: boolean) {
    if (modalTitle) title.value = modalTitle
    if (isModalClosableFromOutside) closableFromOutside.value = isModalClosableFromOutside
    closable.value = isModalClosable
    view.value = markRaw(modalView)
    isOpen.value = true
  }

  function close () {
    isOpen.value = false
  }

  function updateTitle (newTitle: string) {
    title.value = newTitle
  }

	return {
    open,
    close,
    updateTitle
  }
}