import Arrivals from './components/arrivals/Arrivals.jsx';
import Brands from './components/brands/Brands.jsx';
import Favourite from './components/favorite/Favourite.jsx';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import InformationWindow from './components/infoWindow/InfoWindow.jsx';
import Input from './components/input/Input.jsx';
import Promo from './components/promo/Promo.jsx';
import RegistrationForm from './components/registration/RegistrationForm.jsx';
import SaleBloc from './components/sale/Sale.jsx';
import Voucher from './components/voucher/Voucher.jsx';

import { useState } from 'react';

function App() {
  const [isSendEmail, setIsSentEmail] = useState(false);
  const [isRegistrationFormOpen, setIsRegistrationFormOpen] = useState(false);

  const handleSignInClick = () => {
    setIsRegistrationFormOpen(true);
  };

  const handlSentClick = () => {
    setIsSentEmail(true);
  };

  return (
    <div className="App">
      <Header onSignInClick={handleSignInClick}/>
      {isRegistrationFormOpen && <RegistrationForm onClose={() => setIsRegistrationFormOpen(false)}/>}
      <Promo />
      <Brands  />
      <Arrivals />
      <SaleBloc />
      <Favourite/>
      <Voucher />
      <Input onSubmitEmail={handlSentClick}/>
      {isSendEmail && <InformationWindow onClose={() => setIsSentEmail(false)} title="Successfully sent" 
        description="Check your email. You shoud receive a letter soon :)" />}
      <Footer />
    </div>
  );
}

export default App;
