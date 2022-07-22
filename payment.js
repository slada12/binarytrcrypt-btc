(function payment() {
  console.log('Payment Page');
  const depo_amount = localStorage.getItem('depo_amount');
  const wallet = localStorage.getItem('walletType');
  document.getElementById('amount_depo').textContent = `$${depo_amount.toLocaleString('en-US')}`
  document.getElementById('tow').textContent = `${wallet} Address:`;
  const copy = document.getElementById('copyWallet');

  if ('USDT' === wallet.trim()) {
    return copy.value = '0x43e1f7772b826c6cc0f07476a5cc32e340da016e'
  }

  if ('Ethereum' === wallet.trim()) {
    return copy.value = '0x43e1f7772b826c6cc0f07476a5cc32e340da016e'
  }

  if ('Bitcoin' === wallet.trim()) {
    return copy.value = '38UHbxGDK4VAU9VUHJDJgzHQSYdG3g96CW'
  }

  document.location.href = '/deposit.html';
} ());