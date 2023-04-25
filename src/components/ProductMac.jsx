const PRODUCTSMAC = [
  {
    image: "/macbook.jpeg",
    title: "MacBook Air",
    description: "115,280円~",
  },
  {
    image: "/macbook.jpeg",
    title: "MacBook Pro 13inch",
    description: "148.280円~",
  },
  {
    image: "/macbook.jpeg",
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
          <div class="px-4 py-4 shadow-lg shadow-gray-300 rounded-2x items-center">
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