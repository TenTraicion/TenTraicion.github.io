//opening form
function openConfig() {
  ovrl.style.display = "flex";
  backdrop.style.display = "block";
  console.log("Form Opened!")
}

//closing form
function closeConfig() {
  ovrl.style.display = "none";
  backdrop.style.display = "none";
  err.classList.remove("error");
  chk.checked = false;
  subject.value = "";
  body.value = "";
  uname.value = "";
  email.value = "";
  git.value = "";
  twit.value = "";
  msg.value = "";
  msg.className = "";
	remains.textContent = "200";
	remains.className = "pos";
  btn.style.display = "none";
  console.log("Form Closed!")
}

//checkbox
function checked() {
  if (uname.value == "" || email.value == "" || git.value == "" || twit.value == "" || sub.value == "" || msg.value == "") {
    err.classList.add("error");
    btn.style.display = "none";
    chk.checked = "false";
    return;
  }
    err.classList.remove("error");
    btn.style.display = "inline"

    const output = `MY Information: \n Name: ${uname.value}\n Email: ${email.value}\n GitHub Profile: https://github.com/${git.value}\n Twitter: https://twitter.com/${twit.value}`;
    const mail = `\n\n My Message:\n ${msg.value}`;

    subject.value = sub.value;
    body.value = output + mail;
}

//count
function update(event) {
  const entry = event.target.value;
    
  const count = msg.maxLength - entry.length;

  remains.textContent = count;

  if(count <= 10) {
    remains.className = "error";
    msg.classList.add("error");
    msg.classList.remove("warning");
  } else if(count <= 50) {
      remains.className = "warning"
      msg.classList.remove("error");
      msg.classList.add("warning");
  } else {
      remains.className = "pos";
      msg.classList.remove("warning");
      msg.classList.remove("error");
  }
}
