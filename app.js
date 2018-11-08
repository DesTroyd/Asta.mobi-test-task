const coins = [{
    image: 'BTC.png',
    name: 'BTC',
    valute: ['USD', 'UAH', 'RUB'],
    price: [6485, 178338, 430454]
  },
  {
    image: 'ETH.png',
    name: 'ETH',
    valute: ['USD', 'UAH', 'RUB'],
    price: [215.75, 5850, 14319]
  },
  {
    image: 'XRP.png',
    name: 'XRP',
    valute: ['USD', 'UAH', 'RUB'],
    price: [0.513255, 13.8255, 34.07]
  }
]

new Vue({
  el: '#app',
  data: {
    coinCurrentValue: '',
    coins: coins,
    activeCoin: coins[0].name,
    currentValute: 'USD',
  },
  methods: {
    selectCoin: function(index) {
      this.activeCoin = coins[index].name
    }
  },
  computed: {
    amount: function() {
      var to = this.currentValute;
      var from = this.activeCoin;
      var final;
      switch (from) {
        case "BTC":
          if (to == "USD") {
            final = this.coinCurrentValue * 6800;
          }
          if (to == "UAH") {
            final = this.coinCurrentValue * 150000;
          }
          if (to == "RUB") {
            final = this.coinCurrentValue * 340000;
          }
          break;
        case "ETH":
          if (to == "USD") {
            final = this.coinCurrentValue * 250;
          }
          if (to == "UAH") {
            final = this.coinCurrentValue * 7400;
          }
          if (to == "RUB") {
            final = this.coinCurrentValue * 16000;
          }
          break;
        case "XRP":
          if (to == "USD") {
            final = this.coinCurrentValue * 0.2500;
          }
          if (to == "UAH") {
            final = this.coinCurrentValue * 7.0231;
          }
          if (to == "RUB") {
            final = this.coinCurrentValue * 17.228;
          }
          break;
      }
      return final;
    }
  }
})