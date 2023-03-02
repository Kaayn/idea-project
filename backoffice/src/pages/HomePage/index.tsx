import { useContext, useEffect } from "react";
import { AuthDataContext } from "../../App";
import { ProductsList } from "../../components/productsList";
import { useNavigate } from "react-router";

export const HomePage = () => {
  const { data } = useContext(AuthDataContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!data.user) {
      navigate("/");
    }
  }, [data]);

  return (
    <div className="w-11/12">
      <ProductsList />
    </div>
  );
};
