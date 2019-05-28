# Receipt Generator

This is a software that receives a list of products, calculates the taxes and generates a receipt.

This software calculates two taxes:

- **Basic sales tax** => is applicable at a rate of 10% on all goods, except books, food, and medical products that are exempt
- **Import duty** => is an additional sales tax applicable on all imported goods at a rate of 5%, with no exemptions

## Install dependencies

Run the command on the console:

```
npm install
```

## Test

Run the command on the console::

```
npm test
```

## Execute

To execute the softwaee run the command on the console:

```
node index.js <ARRAY OF PRODUCTS>
```

## Example

```
$ node index.js '["2 book at 12.49", "1 music CD at 14.99", "1 chocolate bar at 0.85"]'
2 book: 24.98
1 music CD: 16.49
1 chocolate bar: 0.85
Sales Taxes: 1.5
Total: 42.32
```
