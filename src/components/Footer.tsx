export const Footer = () => {
  return (
    <footer className="bg-footer-bg text-footer-text py-8 px-4 text-center text-sm">
      <p className="mb-4">Copyright ©2025 | Todos Direitos Reservados</p>
      <p className="text-xs opacity-90 mb-4 max-w-4xl mx-auto">
        Facebook: Todas as opiniões e conteúdos expressos neste site são de responsabilidade exclusiva de seus autores e não refletem a opinião ou políticas do Facebook.
      </p>
      <div className="flex justify-center gap-4 text-xs">
        <span className="text-primary">
          Política de Privacidade
        </span>
        <span>-</span>
        <span className="text-primary">
          Termos e Condições
        </span>
      </div>
    </footer>
  );
};
