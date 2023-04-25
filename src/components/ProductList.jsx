import { ProductMac } from "./ProductMac";
import { ProductIphone } from "./ProductIphone";

export function ProductList() {
  return (
    <>
      <div class="p-16">
        <h1>Category Components</h1>
        <div class="border-solid border-2 border-black-500 p-16">
          <h1>Mac</h1>
          <div class="grid grid-cols-3 gap-3 p-32 mt-10 border-solid border-2 border-black-500">
              <ProductMac />
          </div>
        </div>
      </div>
      <div class="p-16">
        <h1>Category Components</h1>
        <div class="border-solid border-2 border-black-500 p-16">
          <h1>iPhone</h1>
          <div class="grid grid-cols-3 gap-3 p-32 mt-10 border-solid border-2 border-black-500">
              <ProductIphone />
          </div>
        </div>
      </div>
    </>
  );
}