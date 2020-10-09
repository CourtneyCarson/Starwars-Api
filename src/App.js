import React from 'react';
import Header from './Header'
import SearchBox from './SearchBox'


class App extends React.Component {
  render(){
  return  (
    <main className='App'>
      <Header />
      <SearchBox/> 
  
      {/* content goes here */}
    </main>
  );
}
}
export default App;