var double=function(x){
  return x+x;
};

var square=function(x){
  return x*x;
}

var map= function(ar,x){
  for (var i=0;i<ar.length;i++){
    ar[i]=x(ar[i]);
    console.log(ar[i]);
  }
  
}

map([1,2,3],double);
map([1,2,3],square);
