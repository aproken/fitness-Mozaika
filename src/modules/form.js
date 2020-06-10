import {maskPhone} from './maskPhone'
import {postData, formToJSON} from './utils'
import {showPopup} from './popup'

const inputValidListener = (elem, message="Введите коректный формат") => {
  const defaultStyle = elem.style; 
  elem.addEventListener('input', () => {
    // обнуляем кастомную ошибку 
     elem.setCustomValidity('');
    // проверяем на валидность
    if (elem.checkValidity()) {
      elem.style = defaultStyle;
    } else {
      elem.style.border = '1px solid red'
      elem.setCustomValidity(message);
    }
  })
}

export const formCallback = (form) => {
  const consent = form.querySelector('[name="consent"]'),
        nameForm = form.querySelector('input[name="name"]'),
        phoneForm = form.querySelector('input[type="tel"]');
  
  inputValidListener(nameForm, "Имя может содержать только кирилические символы")
  nameForm.pattern = '^[а-яА-Я\\s]+$';

  inputValidListener(phoneForm, "Телефон может содержать только цифры и знак + ")
  maskPhone('#' + phoneForm.id);
  phoneForm.pattern = '^\\+7 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}$';

  //удаляем required и проверяем в ручную 
  consent.removeAttribute('required')

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (!consent.checked) {
      alert('Необходимо согласие на обработку данных')
    } else {
      postData(formToJSON(form))
        .then(() => {
          showPopup('#thanks')
          form.reset()
        })
        .catch(() =>  showPopup('#error'))
    }
  })
}

export const formFooter = (form) => {
  const clubs = form.querySelectorAll('[name="club-name"]'),
        phoneForm = form.querySelector('input[type="tel"]');

  inputValidListener(phoneForm, "Телефон может содержать только цифры и знак + ")
  maskPhone('#' + phoneForm.id);
  phoneForm.pattern = '^\\+7 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}$';


  form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (![...clubs].some(i => i.checked)) {
      alert('Необходимо выбрать клуб')
    } else {
      postData(formToJSON(form))
        .then(() => {
          showPopup('#thanks')
          form.reset()
        })
        .catch(() => showPopup('#error'))
    }
  })
}
