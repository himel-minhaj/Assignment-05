document.getElementById("Donate-btn1").addEventListener("click", function () {
  // const inputValue = parseFloat(document.getElementById("input-1").value);

  const input1 = getInputFieldValueById("input-1");
  if (isNaN(input1) || input1 <= 0) {
    alert("⚠️ Invalid amount!");
    return;
  }

  // const donateTK = parseFloat(document.getElementById("donate-1").innerText);
  const donateTK = getInnerFieldValueById("donate-1");
  console.log(donateTK);
  const myBalance = getInnerFieldValueById("my-balance");
  console.log(myBalance);
  const donateBalance = input1 + donateTK;
  document.getElementById("donate-1").innerText = donateBalance;

  const accountBalance = myBalance - input1;
  document.getElementById("my-balance").innerText = accountBalance;

  my_modal_5.showModal();
  // history
  const historyItem = document.createElement("div");
  historyItem.className = "bg-white p-5 rounded-md border-2 border-black-500";
  historyItem.innerHTML = `<p class='text-xl font-bold text-gray-600'>${input1}Taka is Donated for famine-2024 at Feni, Bangladesh</p>
  <p class='text-xl font-bold text-gray-600'>${new Date().toLocaleDateString()}</p>`;
  const historyCointainer = document.getElementById("history-list");
  historyCointainer.appendChild(historyItem);
});
// 2nd section
document.getElementById("Donate-btn2").addEventListener("click", function () {
  const input2 = getInputFieldValueById("input-2");
  if (isNaN(input2) || input2 <= 0) {
    alert("⚠️ Invalid amount!");
    return;
  }

  // const donateTK = parseFloat(document.getElementById("donate-1").innerText);
  const donateTK = getInnerFieldValueById("donate-2");
  console.log(donateTK);
  const myBalance = getInnerFieldValueById("my-balance");

  const donateBalance = input2 + donateTK;
  document.getElementById("donate-2").innerText = donateBalance;

  const accountBalance = myBalance - input2;
  document.getElementById("my-balance").innerText = accountBalance;

  my_modal_5.showModal();
  // history
  const historyItem = document.createElement("div");
  historyItem.className = "bg-white p-5 rounded-md border-2 border-black-500";
  historyItem.innerHTML = `<p class='text-xl font-bold text-gray-600'>${input2}Taka is Donated for Flood Relief in Feni,Bangladesh</p>
  <p class='text-xl font-bold text-gray-600'>${new Date().toLocaleDateString()}</p>`;
  const historyCointainer = document.getElementById("history-list");
  historyCointainer.appendChild(historyItem);
});
// 3rd section
document.getElementById("Donate-btn3").addEventListener("click", function () {
  const input3 = getInputFieldValueById("input-3");
  if (isNaN(input3) || input3 <= 0) {
    alert("⚠️ Invalid amount!");
    return;
  }

  const donateTK = getInnerFieldValueById("donate-3");
  console.log(donateTK);
  const myBalance = getInnerFieldValueById("my-balance");
  // console.log(myBalance);
  const donateBalance = input3 + donateTK;
  document.getElementById("donate-3").innerText = donateBalance;

  const accountBalance = myBalance - input3;
  document.getElementById("my-balance").innerText = accountBalance;

  my_modal_5.showModal();
  // history
  const historyItem = document.createElement("div");
  historyItem.className = "bg-white p-5 rounded-md border-2 border-black-500";
  historyItem.innerHTML = `<p class='text-xl font-bold text-gray-600'>${input3}Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
  <p class='text-xl font-bold text-gray-600'>${new Date().toLocaleDateString()}</p>`;
  const historyCointainer = document.getElementById("history-list");
  historyCointainer.appendChild(historyItem);
});
//
//
// history btn
//
//
document
  .getElementById("history-botton")
  .addEventListener("click", function () {
    const historyBootn = document.getElementById("history-botton");
    historyBootn.classList.add("bg-[#b4f461]");
    const donnationBootn = document.getElementById("donation-botton");
    donnationBootn.classList.remove("bg-[#b4f461]");
    const donationBtnCointainer = document.getElementById("donation-btn-con");
    donationBtnCointainer.classList.add("hidden");
    const historySection = document.getElementById("history-section");
    historySection.classList.remove("hidden");
  });
//
//
// donnationBootn
//
//
document
  .getElementById("donation-botton")
  .addEventListener("click", function () {
    const donnationBootn = document.getElementById("donation-botton");
    donnationBootn.classList.add("bg-[#b4f461]");
    const historyBootn = document.getElementById("history-botton");
    historyBootn.classList.remove("bg-[#b4f461]");
    const donationBtnCointainer = document.getElementById("donation-btn-con");
    donationBtnCointainer.classList.remove("hidden");
    const historySection = document.getElementById("history-section");
    historySection.classList.add("hidden");
  });
