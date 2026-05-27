function monthlyPayment(P, r, n){
  const monthlyRate = r/100/12;
  const months = n*12;
  if(monthlyRate===0) return P/months;
  return (P*monthlyRate)/(1-Math.pow(1+monthlyRate,-months));
}
document.getElementById('calc').addEventListener('click', ()=>{
  const P = Number(document.getElementById('amount').value);
  const r = Number(document.getElementById('rate').value);
  const n = Number(document.getElementById('years').value);
  const payment = monthlyPayment(P,r,n);
  document.getElementById('result').textContent = 'Cuota mensual: €' + payment.toFixed(2);
});
