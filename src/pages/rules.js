import React from 'react';

const Rules = () => {
  return (
    <div style={{ backgroundColor: '#212529ab', color: 'aliceblue', padding: '20px' }}>
      <h2>Regulamin:<hr></hr>


      </h2>
      <ol>
        <li>
          <strong style={{color:'red'}}>Zakłady:</strong>
          <ul>
            <li>Każdy uczestnik powinien <b>wybrać swojego uzytkownika</b> i obstawić wynik oraz typ dla każdego meczu w danej kolejce.</li>
            <li>Zakłady można składać do rozpoczęcia meczu. Po rozpoczęciu meczu zakłady na ten mecz są zablokowane.</li>
            <li>Zakłady na kolejną kolejkę będą odblokowane po zakończeniu aktualnej kolejki przez daną grupę.</li>
          </ul>
        </li>
        <li>
          <strong style={{color:'red'}}>Zatwierdzanie Zakładów:</strong>
          <ul>
            <li>Aby zakłady zostały uwzględnione, należy je zatwierdzić przed rozpoczęciem meczu.</li>
            <li>Zakłady można zatwierdzić tylko raz. Po zatwierdzeniu zakładów, nie można ich zmieniać.</li>
          </ul>
        </li>
        <li>
          <strong style={{color:'red'}}>Punktacja Meczu:</strong>
          <ul>
            <li>Za każdy poprawny wynik otrzymuje się 3 punkty.</li>
            <li>Za każdy prawidłowy typ (1, X, 2) otrzymuje się 1 punkt.</li>
            <li>Punktacja zostanie obliczona na podstawie poprawnych wyników i typów dla wszystkich meczów w danej kolejce.</li>
            <li>Oznaczenia w karcie : <br></br></li>
            -✅ - 3 pkt - prawidlowy wynik odgadnięty<br></br>
            -☑️ - 1 pkt - tylko typ odgadnięty
          </ul>
        </li>
        <li>
          <strong style={{color:'red'}}>Rozstrzygnięcie:</strong>
          <ul>
            <li>W przypadku, gdy dwóch lub więcej uczestników uzyska tę samą liczbę punktów, rozstrzygające będą dodatkowe kryteria, takie jak:
              <ul>
                <li>Liczba poprawnych wyników,</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong style={{color:'red'}}>Inne Warunki:</strong>
          <ul>
            <li>Organizator zastrzega sobie prawo do interpretacji regulaminu oraz wprowadzenia zmian w przypadku potrzeby.</li>
            <li>Uczestnicy, którzy naruszają regulamin lub podejmują próby oszustwa, zostaną zdyskwalifikowani.</li>
            <hr></hr>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default Rules;
