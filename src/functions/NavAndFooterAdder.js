import React from "react";

// import Logo and Footer
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";

const NavAndFooterAdder = (WrappedComponent) => {
  class NavAndFooterComponent extends React.Component {
    render() {
      return (
        <>
          <Logo />
          <WrappedComponent {...this.props} />
          <Footer />
        </>
      );
    }
  }

  NavAndFooterComponent.displayName = `NavAndFooter(${getDisplayName(
    WrappedComponent
  )})`;

  return NavAndFooterComponent;
};

// Pages to add navigation to
import HomeContainer from "@/components/HomeContainer";

// Run NavAndFooterAdder on pages
export const HomeWithNavAndFoot = NavAndFooterAdder(HomeContainer);

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}
