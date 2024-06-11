// first-class function


// Imperative、Prototype-oriented、Meta-programming Differentiate

// * 1.example 99 bottle peers programer

// 1. Imperative programming
function bottles_imperative(n: number) {
  for(let i = n; i > 0; i--) {
    console.log('-----start bottles-----');
    console.log(`${i} bottles of beer on the wall`)
    console.log(`${i} bottles of beer`)
    console.log(`Take one down, pass it around`)
    console.log(`${i - 1} bottles of beer on the wall`)

    if(i === 1) {
      console.log(`no more bottle of beer on the wall`)
    }
  }
}

// bottles_imperative(10)


// 2. Functional programming

function bottles_functional(n: number) {
  // Split multiple single function
  function bottles_segment(n: number) {
    return [
      `-----start bottles-----`,
      `${n} bottles of beer on the wall`,
      `${n} bottles of beer`,
      `Take one down, pass it around`,
      `${n - 1} bottles of beer on the wall`
    ]
  }
  // Compose multiple single function
  return Array.from({length: n}, (_, i) => i + 1)
    .reduceRight<string[]>((acc, n) => {
      if(n === 0) return [...acc]
      return [...acc, ...bottles_segment(n)]
    }, [])
}


const rst = bottles_functional(10)
console.log(rst);




