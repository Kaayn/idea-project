import { useContext, useEffect } from "react";
import { AuthDataContext } from "../../App";
import { useNavigate } from "react-router";
import { HomeHeader } from "../../components/homeHeader";
import { OrdersList } from "../../components/ordersList";

export const OrdersPage = () => {
  const { data } = useContext(AuthDataContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!data.user) {
      navigate("/");
    }
  }, [data]);

  return (
    <div className="w-11/12">
      <HomeHeader />
      <OrdersList />
    </div>
  );
};
