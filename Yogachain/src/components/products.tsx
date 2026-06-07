

export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}
export const pinata = 'https://red-important-roadrunner-709.mypinata.cloud/ipfs/';

export const products: Product[] = [
    
    {id: 1, name: 'Starter yoga pack',
     price: '0.002', 
     description: 'A great starting point for your yoga journey.',
     image: `${pinata}bafybeigperv3355zaszyoffvywkrwncuoq7zfsgyuckoxg6hm2vl6hxlhu`},

    {id: 2, name: 'Learning yoga pack',
     price: '0.001', 
     description: 'You can use this pack to improve your yoga skills.', 
     image: `${pinata}bafybeieakuyvvevew6gwfqc2umy5txyinsbkk25mgfzoshfnza4emgxrey`},

    {id: 3, name: 'Yoga blocks', 
     price: '0.0005', 
     description: 'Support your poses with these study yoga blocks.', 
     image: `${pinata}bafybeidkppklvtzfjh3msoveap2txdspeufnoznz7lwubxhunu6ft7qrvy`},

    {id: 4, name: 'Intermediate yoga pack', 
     price: '0.0003', 
     description: 'Take your practice to the next level with this intermediate pack.', 
     image: `${pinata}bafybeidyhlqa2febka3agvexf6d4i2sbe6el26kn4n3vbaqh7pkde7whwi`},

    {id: 5, name: 'Advanced yoga pack', 
      price: '0.0002', 
      description: 'Challenge yourself with this advanced pack.', 
      image: `${pinata}bafybeihyyrq6jmy5t5a5ohp7vyshs2zxrgy6tqhb22ioxspuqwoifwq3qa`},
];

