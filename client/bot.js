const SOUP_NAMES = [
  /^Mulligatawny$/g,
  /^Crab Bisque$/g,
  /^Turkey Chili$/g,
  /^Jambalaya$/g,
  /^Chicken Broccoli$/g,
  /^Clam Bisque$/g,
  /^Split Pea$/g,
  /^French Onion$/g,
  /^Mushroom Barley$/g,
  /^Tomato Rice$/g
]

const SOUP_SIZES = [{
  size: /Medium/g,
  price: 3
}, {
  size: /Large/g,
  price: 4
}]

export const constructAnswer = message => {
  if (/Hello/g.test(message)) return 'Hello'
  if (/bread/g.test(message)) return Math.random() > 0.4 ? '2 Dollars' : 'soup.webp'

  const [first, ...others] = message.split(' ')
  const soupSizeIndex = SOUP_SIZES.map(({ size }) => size.test(first)).indexOf(true)
  const soupNameIndex = SOUP_NAMES.map(name => name.test(others.join(' '))).indexOf(true)
  if (soupSizeIndex === -1 || soupNameIndex === -1) return 'soup.webp'

  return `${SOUP_SIZES[soupSizeIndex].price} Dollars`
}

export const BOT_USER = 'Soup Nazi'
