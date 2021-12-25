<template>

    <h1>Shopping Cart</h1>

  <div class="shopping-cart">

    <div class="column-labels">
      <label class="product-image">Image</label>
      <label class="product-details">Product</label>
      <label class="product-price">Price</label>
      <label class="product-quantity">Quantity</label>
      <label class="product-removal">Add/Remove</label>
      <label class="product-line-price">Total</label>
    </div>

    <div class="product" v-bind:style="product.qty > 0 ? {'border': '1px solid green'} : {'border:': 'none'}" v-bind:key="product.id" v-for="product in products">
      <div class="product-image">
        <img :src="product.img" />
      </div>
      <div class="product-details">
        <div class="product-title">{{product.title}}</div>
        <p class="product-description">{{product.desc}}</p>
      </div>
      <div class="product-price">{{product.price}}</div>
      <div class="product-quantity">
        <p class="product-description">{{product.qty}}</p>

      <!--    Buttons    -->
      <div class="product-removal">
        <button class="add-product" @click="addQtyProduct(product.id)">
          Add
        </button>
        <button class="add-product" @click="addToCart(product)">
          Add to Cart
        </button>
        <button @click="removeItemProduct(product.id)" class="remove-product">
          Remove
        </button>
      </div>
        <!--    Total Price    -->
      <div class="product-line-price" style="float: right">{{product.total}}</div>
    </div>
    </div>

    <div class="totals" style="float: right;">
      <div class="totals-item">
        <label>Subtotal</label>
        <div class="totals-value" id="cart-subtotal">{{totalPrice}}</div>
      </div>
<!--      <div class="totals-item">-->
<!--        <label>Tax (5%)</label>-->
<!--        <div class="totals-value" id="cart-tax">3.60</div>-->
<!--      </div>-->
<!--      <div class="totals-item">-->
<!--        <label>Shipping</label>-->
<!--        <div class="totals-value" id="cart-shipping">15.00</div>-->
<!--      </div>-->
<!--      <div class="totals-item totals-item-total">-->
<!--        <label>Grand Total</label>-->
<!--        <div class="totals-value" id="cart-total">90.57</div>-->
<!--      </div>-->
    </div>

<!--    <button class="checkout">Checkout</button>-->

  </div>
</template>

<script>
  import products from "@/mock/products.json";
  import {mapGetters, mapActions} from 'vuex';
  export default {
  name: 'HelloWorld',
    props: {
    // msg: String
  },
  data() {
    return {
      products,
    }
  },
    computed: {
    ...mapGetters(["products"]),
      totalPrice()
      {
        return this.products.reduce((a,b) => a + b.qty * b.price, 0);
      },
    },
  methods: {
    ...mapActions(["getProducts", "addToCart", "addQtyProduct", "removeItemProduct" ]),
  },
    mounted() {
      this.getProducts();
    }
  }
</script>
<style>
  .text-right {
    float: right;
    margin-bottom: 10px;
  }
  .btn-primary{
    color: #fff;
    background-color: #5e97d5;
  }
.product-image {
float: left;
width: 20%;
}
.product-details {
float: left;
width: 37%;
}
.product-price {
float: left;
width: 12%;
}
.product-quantity {
float: left;
width: 10%;
}
.product-removal {
float: left;
width: 9%;
}
.product-line-price {
float: left;
width: 12%;
text-align: right;
}
/* This is used as the traditional .clearfix class */
.group:before, .shopping-cart:before, .column-labels:before, .product:before, .totals-item:before, .group:after, .shopping-cart:after, .column-labels:after, .product:after, .totals-item:after {
content: '';
display: table;
}
.group:after, .shopping-cart:after, .column-labels:after, .product:after, .totals-item:after {
clear: both;
}
.group, .shopping-cart, .column-labels, .product, .totals-item {
zoom: 1;
}
/* Apply clearfix in a few places */
/* Apply dollar signs */
.product .product-price:before, .product .product-line-price:before, .totals-value:before {
content: '$';
}
/* Body/Header stuff */
body {
padding: 0 30px 30px 20px;
font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, sans-serif;
font-weight: 100;
}
h1 {
font-weight: 100;
}
label {
color: #aaa;
}
.shopping-cart {
margin-top: -45px;
}
/* Column headers */
.column-labels label {
padding-bottom: 15px;
margin-bottom: 15px;
border-bottom: 1px solid #eee;
}
.column-labels .product-image, .column-labels .product-details, .column-labels .product-removal {
text-indent: -9999px;
}
/* Product entries */
.product {
margin-bottom: 20px;
padding-bottom: 10px;
border-bottom: 1px solid #eee;
}
.product .product-image {
text-align: center;
}
.product .product-image img {
width: 100px;
}
.product .product-details .product-title {
margin-right: 20px;
font-family: 'HelveticaNeue-Medium', 'Helvetica Neue Medium';
}
.product .product-details .product-description {
margin: 5px 20px 5px 0;
line-height: 1.4em;
}
.product .product-quantity input {
width: 40px;
}
.product .remove-product,.add-product,.btn {
border: 0;
padding: 4px 8px;
font-family: 'HelveticaNeue-Medium', 'Helvetica Neue Medium';
font-size: 12px;
border-radius: 3px;
  cursor: pointer;
}
.add-product{
  color: #fff;
  background-color: #66bb66;
}
.remove-product{
  color: #fff;
  background-color: #c66;
}
.product .remove-product:hover {
background-color: #a44;
}
.product .add-product:hover {
  background-color: #498949;
}
/* Totals section */
.totals .totals-item {
float: right;
clear: both;
width: 100%;
margin-bottom: 10px;
}
.totals .totals-item label {
float: left;
clear: both;
width: 79%;
text-align: right;
}
.totals .totals-item .totals-value {
float: right;
width: 21%;
text-align: right;
}
.totals .totals-item-total {
font-family: 'HelveticaNeue-Medium', 'Helvetica Neue Medium';
}
.checkout {
float: right;
border: 0;
margin-top: 20px;
padding: 6px 25px;
background-color: #6b6;
color: #fff;
font-size: 25px;
border-radius: 3px;
}
.checkout:hover {
background-color: #494;
}
/* Make adjustments for tablet */
@media screen and (max-width: 650px) {
.shopping-cart {
margin: 0;
padding-top: 20px;
border-top: 1px solid #eee;
}
.column-labels {
display: none;
}
.product-image {
float: right;
width: auto;
}
.product-image img {
margin: 0 0 10px 10px;
}
.product-details {
float: none;
margin-bottom: 10px;
width: auto;
}
.product-price {
clear: both;
width: 70px;
}
.product-quantity {
width: 100px;
}
.product-quantity input {
margin-left: 20px;
}
.product-quantity:before {
content: 'x';
}
.product-removal {
width: auto;
}
.product-line-price {
float: right;
width: 70px;
}
}
/* Make more adjustments for phone */
@media screen and (max-width: 350px) {
.product-removal {
float: right;
}
.product-line-price {
float: right;
clear: left;
width: auto;
margin-top: 10px;
}
.product .product-line-price:before {
content: 'Item Total: $';
}
.totals .totals-item label {
width: 60%;
}
.totals .totals-item .totals-value {
width: 40%;
}
}
</style>
