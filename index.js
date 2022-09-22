const tips=Array.from(document.querySelectorAll('.buttons'));

tips.forEach(function (mov) {
mov.addEventListener("click", handleClick);
});


function handleClick(e) {
    console.log('e', e)
tips.forEach((t)=>{
    t.classList.remove("active")
});
e.target.classList.add("active");
}

var b1 = document.getElementById('b1'),
  b2 = document.getElementById('b2'),
  b3 = document.getElementById('b3'),
  b4 = document.getElementById('b4'),
  b5 = document.getElementById('b5'),
  b6 = document.getElementById('b6'),
  clicks = {};

  var val;

function click(e) {
    val = []
    console.log(e.target.id)
    val= [e.target.id]
  return e.target.id;
}

b1.addEventListener('click', click);
b2.addEventListener('click', click);
b3.addEventListener('click', click);
b4.addEventListener('click', click);
b5.addEventListener('click', click);
b6.addEventListener('click', click);

const addCart = document.getElementById("addcart");
const save = document.getElementById("addcart");

const handleAddCart = () => {
    if(val !== undefined){
       let s =  val[0] === 'b1' ? '7': val[0] === 'b2' ? '8': val[0] === 'b3' ? '9':val[0] === 'b4' ? '10':val[0] === 'b5' ? '11':'12' ;
    document.getElementById("cart").innerHTML = `Priming with a hydrating size ${s} added to cart`;
    document.getElementById("size").innerHTML = "";
    }
}

addCart.addEventListener("click", handleAddCart);

const handleSave = () => {
    if(val === undefined){
    document.getElementById("size").innerHTML = "Please select the size";
    document.getElementById("cart").innerHTML = "";
    }
}

save.addEventListener("click", handleSave);

const addCart1 = document.getElementById("addcart1");
const save1 = document.getElementById("addcart1");

const handleAddCart1 = () => {
    if(val !== undefined){
       let s =  val[0] === 'b1' ? '7': val[0] === 'b2' ? '8': val[0] === 'b3' ? '9':val[0] === 'b4' ? '10':val[0] === 'b5' ? '11':'12' ;
    document.getElementById("cart").innerHTML = `Priming with a hydrating size ${s} added to cart`;
    document.getElementById("size").innerHTML = "";
    }
}

addCart1.addEventListener("click", handleAddCart1);

const handleSave1 = () => {
    if(val === undefined){
    document.getElementById("size").innerHTML = "Please select the size";
    document.getElementById("cart").innerHTML = "";
    }
}

save1.addEventListener("click", handleSave1);

const incrementCount = document.getElementById("increment-count");
const decrementCount = document.getElementById("decrement-count");

const totalCount = document.getElementById("total-count");
var count = 0;

totalCount.innerHTML = count;

const handleIncrement = () => {
  count++;
  totalCount.innerHTML = count;
};

const handleDecrement = () => {
  count--;
  totalCount.innerHTML = count;
};

incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);

