import React from "react";

export const CardDetailsDescription = ({
  gender,
  platform,
  description,
  operSistem,
  processador,
  memory,
  graphic,
  hardDisc,
}) => {
  return (
    <>
      <section>
        <div>
          <div>
            <h2>Generos</h2>
            <p>{gender}</p>
          </div>
          <div>
            <h2>Plataforma</h2>
            <p>{platform}</p>
          </div>
        </div>

        <h2>Descrição</h2>
        <p>{description}</p>

        <div>
          <h3>Requisitos do Sistema</h3>
          <p>
            <span>Sistema Operacional:</span> {operSistem}
          </p>
          <p>
            <span>Processador:</span>
            {processador}
          </p>
          <p>
            <span>Memoria:</span> {memory}
          </p>
          <p>
            <span>Gráficos:</span> {graphic}
          </p>
          <p>
            <span>Espacio em disco:</span> {hardDisc}
          </p>
        </div>
      </section>
    </>
  );
};
