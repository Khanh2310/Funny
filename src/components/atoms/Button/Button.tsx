export const Button = ({
  className = '',
  children,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return <button className={`${className} button`}>{children}</button>;
};
