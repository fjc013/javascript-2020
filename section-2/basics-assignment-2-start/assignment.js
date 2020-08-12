const task3Element = document.getElementById('task-3');

function noParams() {
  alert("You're doing great!");
}

function nameMe(name) {
  alert(name);
}

function strMash(s1, s2, s3) {
  return `${s1} ${s2} ${s3}`;
}

noParams();

nameMe("James Bond");

task3Element.addEventListener('click', noParams);

alert(strMash("James Bond", "42", "LicenseToKill"));
