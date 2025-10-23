interface TitleProps {
  text: string;
  outline?: boolean;
}

/**
 * Un componente de título h2 reutilizable con estilos de Tailwind
 * y una opción para un borde inferior.
 */
export const Title = ({ text, outline = false }: TitleProps) => {
  return (
    <div className="mb-4">
      <h2 className="text-3xl font-bold tracking-tight text-gray-800">
        {text}
      </h2>
      {outline && (
        <hr className="mt-2 border-gray-300" />
      )}
    </div>
  );
};