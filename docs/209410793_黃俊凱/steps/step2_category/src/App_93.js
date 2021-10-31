import Menu_93 from './components/Menu_93'
import items from './data'
import { useState } from 'react';
import Category_93 from './components/Category_93';


  const allCategories = ['all', ...new Set( items.map(item=> item.category))]
  console.log('allCategories', allCategories)

function App_93() {

  const[menuItems, setMenuItems]= useState(items);
  
  const[categories, setCategories]= useState(allCategories);
  
  return (
    <div >
      <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Category_93 categories={categories}/>
      <Menu_93 items={items}/>
      
      
      
    </section>
  </main>
    </div>
  );
}

export default App_93;
