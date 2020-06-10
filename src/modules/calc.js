import {postData, formToJSON} from './utils'
import {showPopup} from './popup'

//Калькулятор
// Прайс для кард
const clubPrice = {
  mozaika: {
    1: 1999,
    6: 9900,
    9: 13900,
    12: 9900,
  },
  schelkovo: {
    1: 2999,
    6: 14990,
    9: 21990,
    12: 14990,
    '12d': 24990,
  },
}

// подсчет цены 
export const calcPromoPrice = (data) => {
  const club_name = data['club-name'],
        card_type = data['card-type'],
        price = clubPrice[club_name][card_type],
        hasPromo = data['promo'] === 'ТЕЛО2019';
  if (hasPromo){
    return Math.floor(price * 0.7);
  } else {
    return price;
  }
}

export const calc = () => {
  const form = document.querySelector('#card_order'),
        totalMessage = form.querySelector('#price-total');

  const render = () => {
    if (!totalMessage) {
      return;
    }
    const data = formToJSON(form);
    totalMessage.textContent = calcPromoPrice(data);
  }

  form.addEventListener('input', render);

  render()
}

