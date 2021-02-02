var arr = [];
var lbl = []
var c_ = [];
var b_c = []
var myChart;
function gen_random(){
  arr = [];
  lbl = []
  c_ = [];
  b_c = []
  while(arr.length < 100){
      var r = Math.floor(Math.random() * 100) + 1;
      r = Math.abs(r);
      if(arr.indexOf(r) === -1) 
      {arr.push(r);
      lbl.push("");
      }
      c_.push("#000");
      b_c.push("");
  }
  if(myChart!=undefined){
     myChart.destroy();
  }
  make_chart(arr,lbl,c_,b_c);
}

function make_chart(arr,lbl,c_,b_c){
var ctx = document.getElementById("myChart");
myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: lbl,
    datasets: [{
      label: "Sorting",
      data: arr,
      backgroundColor: c_,
      borderColor: b_c,
      borderWidth: 1
    }]
  },
  options: {
    animation: {
      duration: 0
  },
  legend: {
    display: false
 },tooltips: {
  enabled: false
},
    responsive: true,
    scales: {
      xAxes: [{
          gridLines: {
            display:false,
            drawOnChartArea: false
        }
      },
      {        
        gridLines: {
          display:false,
          drawOnChartArea: false
        }
      }],
      yAxes: [{
        ticks: {
          display:false,
          beginAtZero: true
        }
      }]
    }
  }
});
}



function selection_sort(inputArr){ 
  let n = inputArr.length;
  let flag =0;
  completed_arr=[];
  for(var k=0;k<n;k++){
    completed_arr[k]=-1;
  }
  for(let i = 0; i < n; i++) {

    setTimeout(() => {
      if(i==n-1){
          for(var k=0;k<n;k++)
          {
            c_[k]="#fff";
          }
          myChart.destroy();
          make_chart(inputArr,lbl,c_,b_c);
          flag=1;
      }
      if(flag==0){
      let min = i;
      for(let j = i+1; j < n; j++){
          if(inputArr[j] < inputArr[min]) {
              min=j; 
          }
       }
       if (min != i) {
         for(var k=0;k<n;k++){
           if(k!=i && k!=min ){
             if(completed_arr[k]==-1)
              c_[k]="#000";
             else
             c_[k]="#fff";
           }
           else{
            c_[k]="#FFFF00";
           }
         }
           let tmp = inputArr[i]; 
           inputArr[i] = inputArr[min];
           inputArr[min] = tmp;
           myChart.destroy();
           make_chart(inputArr,lbl,c_,b_c);
        }      
      }
      completed_arr[i]=1;
      }, 100 * i);
      
  }
}

function insertion_sort(inputArr){
  let n = inputArr.length;
  completed_arr=[];
  for(var k=0;k<n;k++){
    completed_arr[k]=-1;
  }
  for (let i = 1; i < n; i++) {
    setTimeout(() => {
      let current = inputArr[i];
      let j = i-1; 
      while ((j > -1) && (current < inputArr[j])) {
          inputArr[j+1] = inputArr[j];
          j--;
      }
      inputArr[j+1] = current;
      if(i==n-1){
        for(var k=0;k<n;k++)
        {
          c_[k]="#fff";
        }
        myChart.destroy();
        make_chart(inputArr,lbl,c_,b_c);
     
    }
    else{
      myChart.destroy();
      completed_arr[i-1]=1;
      for(var k=0;k<n;k++){
        if(k!=current && k!=inputArr[j+1] ){
          if(completed_arr[k]==-1)
           c_[k]="#000";
          else
          c_[k]="#fff";
        }
        else{
         c_[k]="#FFFF00";
        }
      }
      make_chart(inputArr,lbl,c_,b_c);
    }
    }, 100 * i);
  }

}



function sort(){
 var algo = document.getElementById('algo').value;
 if(algo == "selection"){
   selection_sort(arr);
 } 
 if(algo == "insertion"){
   insertion_sort(arr);
 }
}

