    let quantities = [0, 0, 0, 0, 0, 0, 0, 0];
    let prices = [
      29500.0, 31900.5, 45400.1, 29050.0, 38350.0, 43800.7, 77.77, 14.33,
    ];
    let total = 0.0;
    let slide = 1;

    function addtoQuantity(prd_number) {
      quantities[prd_number]++;
      updateQuantity(prd_number);
    }

    export function subtoQuantity(prd_number) {
      if (quantities[prd_number] > 0) {
        quantities[prd_number]--;
        updateQuantity(prd_number);
      }
    }

    export function updateQuantity(prd_number) {
      totalPrice();
      switch (prd_number) {
        case 0:
          document.getElementById("quantity1").value = quantities[0];
          break;
        case 1:
          document.getElementById("quantity2").value = quantities[1];
          break;
        case 2:
          document.getElementById("quantity3").value = quantities[2];
          break;
        case 3:
          document.getElementById("quantity4").value = quantities[3];
          break;
        case 4:
          document.getElementById("quantity5").value = quantities[4];
          break;
        case 5:
          document.getElementById("quantity6").value = quantities[5];
          break;
        case 6:
          document.getElementById("quantity7").value = quantities[6];
          break;
        case 7:
          document.getElementById("quantity8").value = quantities[7];
          break;
      }
    }

    export function applyQuantity(qtt, prd_number) {
      if (qtt >= 0) {
        switch (prd_number) {
          case 0:
            quantities[0] = qtt;
            updateQuantity(prd_number);
            break;
          case 1:
            quantities[1] = qtt;
            updateQuantity(prd_number);
            break;
          case 2:
            quantities[2] = qtt;
            updateQuantity(prd_number);
            break;
          case 3:
            quantities[3] = qtt;
            updateQuantity(prd_number);
            break;
          case 4:
            quantities[4] = qtt;
            updateQuantity(prd_number);
            break;
          case 5:
            quantities[5] = qtt;
            updateQuantity(prd_number);
            break;
          case 6:
            quantities[6] = qtt;
            updateQuantity(prd_number);
            break;
          case 7:
            quantities[7] = qtt;
            updateQuantity(prd_number);
            break;
        }
      } else {
        applyQuantity(0, prd_number);
      }
    }

    export function totalPrice() {
      total =
        quantities[0] * prices[0] +
        quantities[1] * prices[1] +
        quantities[2] * prices[2] +
        quantities[3] * prices[3] +
        quantities[4] * prices[4] +
        quantities[5] * prices[5] +
        quantities[6] * prices[6] +
        quantities[7] * prices[7];

      document.getElementById("total-value").innerHTML = total.toFixed(2);
    }

