import { ReactNode } from 'react';
import { Header } from '../../molecules/Header';

export const BasicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className="main-content">
        <div className="wrapper-app">{children}</div>
      </div>
    </>
  );
};
