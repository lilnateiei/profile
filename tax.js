function Cal() {
        let inc = parseFloat(document.getElementById("inc").value);
        let ded = parseFloat(document.getElementById("ded").value);

        
        if (inc < 0 || ded < 0) {
            alert("กรุณากรอกค่าที่ถูกต้อง!");
            return;
        }
        let taxable = inc - ded;
        if (taxable< 0) {
            taxable = 0; 
        }


      if (taxable<=150000) {
        document.getElementById("taxmes").innerText = " คุณไม่ต้องเสียภาษี เนื่องจากรายได้ลดหย่อนคุณต่ำกว่า 150,000";
        
      }
       
        let tax = 0;
        if (taxable <= 150000) {
            tax = 0;
        } else if (taxable <= 300000) {
            tax = taxable * 0.05; // 5%
        } else if (taxable <= 500000) {
            tax = (taxable - 300000) * 0.1 + 7500; // 10%
        } else if (taxable <= 750000) {
            tax = (taxable- 500000) * 0.15 + 20000; // 15%
        } else if (taxable <= 1000000) {
            tax = (taxable- 750000) * 0.2 + 47500; // 20%
        } else if (taxable<= 2000000) {
            tax = (taxable - 1000000) * 0.25 + 97500; // 25%
        } else if (taxable <= 5000000) {
            tax = (taxable- 2000000) * 0.3 + 297500; // 30%
        } else {
            tax = (taxable - 5000000) * 0.35 + 1207500; // 35%
        }

        document.getElementById("Result").innerHTML = tax.toFixed(2);
        
    }
    function calculateTravelTime() {
        
        let distance = document.getElementById('distance').value;
        let speed = document.getElementById('speed').value;
        
        
        if (distance > 0 && speed > 0) {
          let time = distance / speed; 
          document.getElementById('result').textContent = "ระยะเวลาเดินทาง: " + time.toFixed(2) + " ชั่วโมง";
        } else {
          document.getElementById('result').textContent = "กรุณากรอกค่าระยะทางและความเร็วให้ถูกต้อง";
        }
      }