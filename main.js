import { timer } from './src/modules/timer'
import { menu } from './src/modules/menu'
import { modal } from './src/modules/modal'
import { check_Form } from './src/modules/check_form'
import { tabs } from './src/modules/tabs'
import { slider } from './src/modules/slider'
import { calc } from './src/modules/calc'
import { sendForm } from './src/modules/sendForm'

timer('16 november 2024')
menu()
modal()
check_Form()
tabs()
slider()
calc(100)
sendForm({ 
    formId: 'form1',
    someElem: [
      {
          type: 'block',
          id: 'total'
      }
    ]
})
sendForm({ formId: 'form2' })
sendForm({ formId: 'form3' })