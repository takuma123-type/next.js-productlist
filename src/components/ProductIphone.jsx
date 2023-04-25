const PRODUCTSIPHONE = [
  {
    image: "/macbook.jpeg",
    title: "iPhone13Pro",
    description: "122,800円",
  },
  {
    image: "/macbook.jpeg",
    title: "Iphone13",
    description: "86,800円~",
  },
  {
    image: "/macbook.jpeg",
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
            <img class="w-1/2" src={product.image} alt="Sunset in the mountains" />
            <p class="mt-3">{product.title}</p>
            <p class="mt-3">{product.description}</p>
          </div>
        </div>
      );
      })}
    </>
    );
}