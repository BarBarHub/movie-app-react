import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './spinner.css'
import { Spinner } from "reactstrap";

function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <div className="spinner">
        <Spinner type="grow" color="info" />
      </div>
    );
  };
}
export default WithLoading;