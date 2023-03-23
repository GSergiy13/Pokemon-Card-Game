import Header from './componets/header/header.js';
import Layout from './componets/layout/layout.js';
import Footer from './componets/footer/footer.js';

// img

import bg from './assets/bg1.jpeg';

const App = () => {
  return (
    <>
      <Header title="lorem213" descr="dksjflsdj" />
      <Layout title='Над, строчка инициал?' descr='Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.' urlBg={bg} colorBg='red'/>
      <Layout title='Над, строчка инициал?' descr='Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.' colorBg='#e2e2e2'/>
      <Layout title='Над, строчка инициал?' descr='Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.' urlBg={bg} colorBg='red'/>
      <Footer />
    </>
  );
};


export default App;