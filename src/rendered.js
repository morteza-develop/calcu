function chalenged(){
    let credit = document.getElementById('credit').value;
    let range;
    const remark = 30;

    if (credit <= 11000){
      range = 220
    }else if (credit > 11000 & credit <= 31000) {
      range = 210
    }else if (credit > 31000 & credit <= 101000) {
      range = 200
    }else if (credit > 101000 & credit <= 501000) {
      range = 190
    }else if (credit > 501000 & credit <= 2000000) {
      range = 180
    }else if (credit > 2000000) {
      range = 170
    }

    
    let amount = document.getElementById('creditsum').value = credit * range;
    document.getElementById('rangnumber').value = range;
    let sum  = document.getElementById('remark').value = credit * remark;
    
    let tax = document.getElementById('tax').value = amount * 9 / 100;

    document.getElementById('total').value = tax + amount + sum;
    
  }
  function fastchange(){
    let credit = document.getElementById('credit').value;
    let range;
    const remark = 30;

    if (credit <= 11000){
      range = 220
    }else if (credit > 11000 & credit <= 31000) {
      range = 210
    }else if (credit > 31000 & credit <= 101000) {
      range = 200
    }else if (credit > 101000 & credit <= 501000) {
      range = 190
    }else if (credit > 501000 & credit <= 2000000) {
      range = 180
    }else if (credit > 2000000) {
      range = 170
    }

    
    let amount = document.getElementById('creditsum').value = credit * range;
    document.getElementById('rangnumber').value = range;
    let sum  = document.getElementById('remark').value = credit * remark;
    
    let tax = document.getElementById('tax').value = amount * 9 / 100;

    document.getElementById('total').value = tax + amount + sum;
    
  }