document.getElementById("Donate-btn1").addEventListener("click", function () {
  // const inputValue = parseFloat(document.getElementById("input-1").value);
  // console.log(inputValue);
  const input1 = getInputFieldValueById("input-1");
  if (isNaN(input1) || input1 <= 0) {
    alert("⚠️ Invalid amount!");
    return;
  }
  // console.log(input1);
  // const donateTK = parseFloat(document.getElementById("donate-1").innerText);
  const donateTK = getInnerFieldValueById("donate-1");
  console.log(donateTK);
  const myBalance = getInnerFieldValueById("my-balance");
  console.log(myBalance);
  const donateBalance = input1 + donateTK;
  document.getElementById("donate-1").innerText = donateBalance;

  const accountBalance = myBalance - input1;
  document.getElementById("my-balance").innerText = accountBalance;
  // const modal = document.getElementById("my_modal_5");
  // const dekhaw = modal.innerText;
  // console.log(dekhaw);
  // const modal = getInnerTextById("my_modal_5");
  my_modal_5.showModal();
});
// history
const correntDate=new Date().toLocaleString()
document.getElementById("history-cointainer").innerHTML =
  abc(donateBalance, 'donate nowakhali', correntDate);


