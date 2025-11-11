import { useState } from 'react';

import Arrivals from './components/arrivals/Arrivals';
import Brands from './components/brands/Brands';
import Favourite from './components/favorite/Favourite';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import InformationWindow from './components/infoWindow/InfoWindow';
import Input from './components/input/Input';
import Promo from './components/promo/Promo';
import RegistrationForm from './components/registration/RegistrationForm';
import SaleBloc from './components/sale/Sale';
import Voucher from './components/voucher/Voucher';

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
      {
        isRegistrationFormOpen && <RegistrationForm
        onClose={() => setIsRegistrationFormOpen(false)} />
      }
      <Promo />
      <Brands  />
      <Arrivals />
      <SaleBloc />
      <Favourite/>
      <Voucher />
      <Input onSubmitEmail={handlSentClick}/>
      {
        isSendEmail && <InformationWindow onClose={() => setIsSentEmail(false)}
        title="Successfully sent" 
        description="Check your email. You shoud receive a letter soon :)" />
      }
      <Footer />
    </div>
  );
}

export default App;
