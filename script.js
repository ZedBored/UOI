const d = [  
  
  { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aut tempore hic dolor quod necessitatibus nulla harum quisquam veniam esse ad quibusdam dolorum libero, atque non natus maiores molestias fugit!", author: "~ Issac joe" },
  
  { text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, dicta quod ea ipsa alias ipsam corrupti impedit laborum totam qui cupiditate voluptate quae minus molestias natus laudantium mollitia. Animi.", author: "~ Jane Smith" },
    
  { text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate cum suscipit odio enim perferendis quisquam soluta ab, est ullam incidunt!", author: "~ Bob Johnson" }

];

let cur = 0;

const test = document.getElementById('tes');
const auth = document.getElementById('auth');
const pre = document.getElementById('pre');
const nex = document.getElementById('nex');

function show() {
  test.innerText = d[cur].text;
  auth.innerText = d[cur].author;
}
function prev() {
  cur = (cur === 0) ? d.length - 1 : cur - 1;
  show();
}
function next() {
  cur = (cur === d.length - 1) ? 0 : cur + 1;
  show();
}

pre.addEventListener('click', prev);
nex.addEventListener('click', next);

var date = new Date().getFullYear();

console.log(date);

var foot = document.getElementById('foo').innerHTML = `Copyright &copy;	${date} All Right Reserved By UOI`;