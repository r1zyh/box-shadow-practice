type TContainer = {
  children: React.ReactNode;
};

export function Container({ children }: TContainer): JSX.Element {
  return <div className="container">{children}</div>;
}
