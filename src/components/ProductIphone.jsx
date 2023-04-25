const PRODUCTSIPHONE = [
  {
    // image: "https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665",
    title: "iPhone13Pro",
    description: "122,800円",
  },
  {
    // image: "https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665",
    title: "Iphone13",
    description: "86,800円~",
  },
  {
    // image: "https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665",
    title: "Ihone SE",
    description: "57,800円~",
  }
]

export function ProductIphone() {
  return (
    <>
    {PRODUCTSIPHONE.map((product) => {
      return (
        <div  key={product.title}>
          <div class="px-4 py-4 shadow-lg shadow-gray-300 rounded-2x">
            {/* <img src={product.image} alt="" /> */}
            <p class="mt-3">{product.title}</p>
            <p class="mt-3">{product.description}</p>
          </div>
        </div>
      );
      })}
    </>
    );
}