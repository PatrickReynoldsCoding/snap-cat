import React from "react";

// import Logo and Footer
import Logo from "./Logo";
import Footer from "./Footer";

const NavAndFooterAdder = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <>
          <Logo />
          <WrappedComponent {...this.props} />
          <Footer />
        </>
      );
    }
  };
};

// Pages to add navigation to
import HomeContainer from "./HomeContainer";

// Run NavAndFooterAdder on pages
export const HomeWithNavAndFoot = NavAndFooterAdder(HomeContainer);
