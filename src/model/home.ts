import axios from '../utils/axios'

let HomeModel = {
  setup: function (parens: any) {
    return axios({
      url: '/cardorder/afterSale/refund',
      method: 'POST',
      data: { parens }
    })
  }
}

export { HomeModel }
