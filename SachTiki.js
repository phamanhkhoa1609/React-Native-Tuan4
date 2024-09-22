import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ShoppingCart = () => {
  const [discountCode, setDiscountCode] = useState('');
  const [total, setTotal] = useState(141800);
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 141800; // Giá của một sản phẩm

  const applyDiscount = () => {
    if (discountCode === 'DISCOUNT2024') {
      setTotal(total * 0.9); // Giảm 10% cho mã đúng
    } else {
      alert('Mã giảm giá không hợp lệ');
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    setTotal(pricePerItem * (quantity + 1));
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotal(pricePerItem * (quantity - 1));
    }
  };

  return (
    <View style={styles.container}>
      {/* Thông tin sản phẩm và hình ảnh */}
      <View style={styles.productInfo}>
        <Image
          source={{ uri: 'https://salt.tikicdn.com/cache/750x750/ts/product/7a/5e/62/8a692ce25c7ed5778c5e2e72576a15cc.jpg.webp' }} // Đường dẫn URL tới hình ảnh
          style={styles.productImage}
        />
        <View style={styles.productDetails}>
          <Text style={styles.tenSach}>Nguyên hàm, tích phân và ứng dụng</Text>
          <Text style={styles.nhaCungCap}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.price}>{pricePerItem.toLocaleString()} đ</Text>
          
          {/* Tăng/giảm số lượng */}
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton} onPress={decreaseQuantity}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.buyLater}>Mua sau</Text>
        </View>
      </View>

      {/* Mã giảm giá đã lưu */}
      <View style={styles.savedDiscountSection}>
        <Text style={styles.maGiamGiaSave}>Mã giảm giá đã lưu</Text>
        <TouchableOpacity>
          <Text style={styles.xemTaiDay}>Xem tại đây</Text>
        </TouchableOpacity>
      </View>

      {/* Nhập mã giảm giá */}
      <View style={styles.maGiamGia}>
        <TextInput
          style={styles.discountInput}
          placeholder="Mã giảm giá"
          value={discountCode}
          onChangeText={setDiscountCode}
        />
        <TouchableOpacity style={styles.apDungButton} onPress={applyDiscount}>
          <Text style={styles.applyButtonText}>Áp dụng</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.giftCardSection}>
<Text style={styles.phieuQuaTang}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
  <TouchableOpacity>
    <Text style={styles.nhapTaiDay}>Nhập tại đây?</Text>
  </TouchableOpacity>
</View>


      {/* Tổng giá trị */}
      <View style={styles.summarySection}>
        <Text style={styles.tamTinh}>Tạm tính</Text>
        <Text style={styles.summaryPrice}>{total.toLocaleString()} đ</Text>
      </View>

      <View style={styles.summarySection}>
        <Text style={styles.thanhTien}>Thành tiền</Text>
        <Text style={styles.totalPrice}>{total.toLocaleString()} đ</Text>
      </View>

      {/* Nút đặt hàng */}
      <TouchableOpacity style={styles.datHangButton1}>
        <Text style={styles.datHangButton}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  productInfo: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center', 
  },
  productImage: {
    width: 100,
    height: 140, 
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  tenSach: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  nhaCungCap: {
    color: '#888',
    marginBottom: 5,
  },
  price: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    width: 30,
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  buyLater: {
    fontSize: 16,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  savedDiscountSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  maGiamGiaSave: {
    fontSize: 16,
  },
  xemTaiDay: {
    fontSize: 16,
    color: '#007BFF',
  },
  maGiamGia: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  discountInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginRight: 10,
  },
  apDungButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
  },
  giftCardSection: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  phieuQuaTang: {
    fontSize: 16,
    marginRight: 5,
  },
  nhapTaiDay: {
  fontSize: 16,               // Kích thước chữ
  color: '#007BFF',           // Màu xanh
  textDecorationLine: 'underline', // Gạch chân để tạo hiệu ứng liên kết
  fontWeight: 'bold',         // Đậm hơn để nổi bật
},

  summarySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tamTinh: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  summaryPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  thanhTien: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#808080',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  datHangButton1: {
    backgroundColor: 'red',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  datHangButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ShoppingCart;
