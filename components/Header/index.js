// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(obj) {
  const headerDiv = document.createElement('div');
  const date = document.createElement('span');
  const title = document.createElement('h1');
  const temp = document.createElement('span');

  headerDiv.classList.add('header');
  date.classList.add('h1');
  temp.classList.add('span');

  headerDiv.appendChild(date);
  headerDiv.appendChild(title);
  headerDiv.appendChild(temp);

  date.textContent = "SMARCH 29, 2019";
  date.textContent = "Lambda Times";
  temp.textContent = "98°"


  return headerDiv;
}

const headerContainer = document.querySelector('.header');
const newHeader = Header();
headerContainer.append(newHeader);
