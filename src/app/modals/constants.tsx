export type Product = {
  id: number
  name: string
  price: number
  description: string
  image: string
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Headphone',
    price: 100,
    description: 'This is a headphone',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60',
  },
  {
    id: 2,
    name: 'Watch',
    price: 200,
    description: 'This is a watch',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60',
  },
  {
    id: 3,
    name: 'Sunglasses',
    price: 120,
    description: 'This is a sunglasses',
    image:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60',
  },
  {
    id: 4,
    name: 'Shoes',
    price: 60,
    description: 'This is a shoes',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60',
  },
]

export type Normalize<T extends object, K extends keyof T> = {
  ids: T[K][]
  entities: NodeJS.Dict<T>
}

export const normalize = <T extends object, K extends keyof T>(
  arr: T[],
  key: K
): Normalize<T, K> => {
  const result: Normalize<T, K> = {
    ids: [],
    entities: {},
  }

  for (const item of arr) {
    const id = item[key]

    if (id) {
      result.ids.push(id)
      result.entities[id] = item
    }
  }

  return result
}

export const NORMALIZED_PRODUCTS = normalize(PRODUCTS, 'id')