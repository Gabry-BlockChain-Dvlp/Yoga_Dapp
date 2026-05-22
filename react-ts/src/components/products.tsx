export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

export const products: Product[] = [
    
    {id: 1, name: 'Starter yoga pack', price: '0.002', description: 'A great starting point for your yoga journey.', image: 'https://via.placeholder.com/150'},
    {id: 2, name: 'Learning yoga pack', price: '0.001', description: 'You can use this pack to improve your yoga skills.', image: 'https://via.placeholder.com/150'},
    {id: 3, name: 'Yoga blocks', price: '0.0005', description: 'Support your poses with these sturdy yoga blocks.', image: 'https://via.placeholder.com/150'},
    {id: 4, name: 'Intermediate yoga pack', price: '0.0003', description: 'Take your practice to the next level with this intermediate pack.', image: 'https://via.placeholder.com/150'},
    {id: 5, name: 'Advanced yoga pack', price: '0.0002', description: 'Challenge yourself with this advanced pack.', image: 'https://via.placeholder.com/150'},
];