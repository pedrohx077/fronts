import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Sobre Nós</h4>
          <p>"Somos uma empresa dedicada a oferecer soluções inovadoras no setor de transporte e estacionamento, com um compromisso constante com a qualidade, segurança e sustentabilidade. Nosso objetivo é garantir a satisfação dos nossos clientes, proporcionando uma experiência tranquila e eficiente. Com uma equipe altamente capacitada e tecnologia de ponta, estamos sempre prontos para atender às suas necessidades.".</p>
        </div>

        <div className="footer-section">
          <h4>Contat    o</h4>
          <p>Email: senaicuritiba@gmail.com</p>
          <p>Telefone: (41) 98729-5409</p>
          <p>Endereço:  R. Paula Gomes, 270 - São Francisco, Curitiba - Pr</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Empresa de Transporte Marítimo. Todos os direitos reservados. | Feito com senai</p>
      </div>
    </footer>
  );
};

export default Footer;
