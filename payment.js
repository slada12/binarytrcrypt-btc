(function payment() {
  console.log('Payment Page');
  const depo_amount = localStorage.getItem('depo_amount');
  const wallet = localStorage.getItem('walletType');
  document.getElementById('amount_depo').textContent = `$${depo_amount.toLocaleString('en-US')}`
  document.getElementById('tow').textContent = `${wallet} Address:`;
  const copy = document.getElementById('copyWallet');


  // Wallet address for octaprotraders.online
  if (siteName === 'octaprotraders.online') {
    console.log('Working for only octaprotraders...');
    if ('USDT' === wallet.trim()) {
      return copy.value = '0x6a5f385b7529c48298ed462927b7bcb742f84c5d'
    }
  
    if ('Ethereum' === wallet.trim()) {
      return copy.value = '0x6a5f385b7529c48298ed462927b7bcb742f84c5d'
    }
  
    if ('Bitcoin' === wallet.trim()) {
      return copy.value = '0x6a5f385b7529c48298ed462927b7bcb742f84c5d'
    }
  }


  // Wallet address for elitecryptoinvestors.com
  if (siteName === 'elitecryptoinvestors.com') {
    console.log('Working for only octaprotraders...');
    if ('USDT' === wallet.trim()) {
      return copy.value = 'TYyRrU3hQp4wdbpyoLhJ9juUiHL2Jj4YHi'
    }
  
    if ('Ethereum' === wallet.trim()) {
      return copy.value = '0x54F33c33B39fdc09D34e665574F695FcBbe04D4F'
    }
  
    if ('Bitcoin' === wallet.trim()) {
      return copy.value = '1AfwJFfUH8gdyZBHYT8FQYXYRzxuEckCEm'
    }
  }


  // Wallet address for other sites
  if ('USDT' === wallet.trim()) {
    return copy.value = '0x3558d4ab6cA97328bF7B6ECa19dEcA7d3312cb3b'
  }

  if ('Ethereum' === wallet.trim()) {
    return copy.value = ''
  }

  if ('Bitcoin' === wallet.trim()) {
    return copy.value = '39cpozE46QheveYZXhw2AA5inXwF6Nn7wq'
  }

  document.location.href = '/deposit.html';
} ());
