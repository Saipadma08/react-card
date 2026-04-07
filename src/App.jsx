import Section1 from './components/Section1/section1';
import Section2 from './components/Section2/section2';

const App= ()=> {

  const users= [
     { id:"1" ,
      img:'https://i.pinimg.com/736x/93/64/41/936441bdd5d35416f0bf50914516e792.jpg',
       intro:'', 
       tag:'Professional'},
    { id:"2",
      img:'https://i.pinimg.com/736x/88/6e/e2/886ee211344a7644e4aead464371341c.jpg',
       intro:'',
       tag:'Industrial'},
    {  id:"3",
       img:'https://i.pinimg.com/736x/93/e6/5a/93e65a6954195f9078a8a9ca9900ce27.jpg',
       intro:'',
       tag:'Beauty'}
  ];
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
      
    </div>
  )
}
export default App