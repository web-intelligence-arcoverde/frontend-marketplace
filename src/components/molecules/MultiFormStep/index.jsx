import React, { useState } from 'react';
import Button from 'src/components/atoms/Button';
import AddressForm from '../AddressForm';
import DetailsForm from '../DetailsForm';
import { CardButton, CardForm } from './style';

const MultiFormStep = () => {
  const [page, setPage] = useState(1);
  const goNext = () => {
    if (page === 2) return;
    setPage((page) => page + 1);
    console.log(goNext, 'foi');
  };
  const goback = () => {
    setPage((page) => page - 1);
  };
  return (
    <CardForm>
      {page === 1 && <DetailsForm nextPage={goNext} />}
      {page === 2 && <AddressForm />}
      {page !== 2 && (
        <CardButton>
          <Button title="Próximo" type="button" onClick={goNext} />
        </CardButton>
      )}
      {page === 2 && (
        <CardButton>
          <Button title="Voltar" type="button" onClick={goback} />
          <Button title="Cadastrar" type="button" onClick={goNext} />
        </CardButton>
      )}
    </CardForm>
  );
};

export default MultiFormStep;
