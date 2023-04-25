const  PRODUCTSMAC = [
  {
    // href: "https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665",
    title: "MacBook Air",
    description: "115,280円~",
  },
  {
    // image: "https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665",
    title: "MacBook Pro 13inch",
    description: "148.280円~",
  },
  {
    // image: "https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665",
    title: "MacBook Pro 14inch",
    description: "239.800円~",
  }
]

export function ProductMac() {
  return (
    <>
    {PRODUCTSMAC.map((product) => {
      return (
        <div  key={product.title}>
          <div class="px-4 py-4 shadow-lg shadow-gray-300 rounded-2x">
            {/* <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" />; */}
            <p class="mt-3">{product.title}</p>
            <p class="mt-3">{product.description}</p>
          </div>
        </div>
      );
      })}
    </>
    );
}