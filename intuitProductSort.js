/**
 * File: sortProductList.js
 * Desc: sort Intuit product list to a-z order,
 *     listing aid entry first if present from state.queryParams
 */

const rawProductList = [
  { productName: 'TurboTax', productId: 'tt' },
  { productName: 'Turbo', productId: 'tb' },
  { productName: 'Mint', productId: 'mt' },
];

function sortProductList(productList, aid = 0) {
  let finalProductList = [];
  const sortedProductList = productList.sort((a, b) =>
    a.productName > b.productName ? 1 : -1
  );
  if (!aid) {
    finalProductList = sortedProductList;
  } else {
    // grab the aid product, remove it from the list and create a new array with the aid product listed first
    // TODO: refactor to only do one iteration thru
    const aidProduct = sortedProductList.filter(
      (product) => product.productId === aid
    );

    const productListNoAid = sortedProductList.filter(
      (product) => product.productId !== aid
    );
    // use array spread to get products in final order
    finalProductList = [...aidProduct, ...productListNoAid];
  }
  return finalProductList;
}

// test run
console.log(sortProductList(rawProductList));

// test run with aid='tt' (turbotax first)
console.log(sortProductList(rawProductList, 'tt'));

// using node style exports
exports.rawProductList = rawProductList;
exports.sortProductList = sortProductList;
