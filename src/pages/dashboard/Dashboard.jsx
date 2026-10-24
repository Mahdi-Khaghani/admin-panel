import { useEffect } from "react";
import { setDashboardChart } from "../../utils/dashboardChart";
import Card from "./Card";
import ProductTable from "./ProductTable";

const Dashboard = () => {
  useEffect(() => {
    const labels = [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ];
    const datapoints = [0, 20, 20, 60, 60, 120, 180, 120, 125, 105, 110, 170];
    setDashboardChart(labels, datapoints);
  }, []);
  return (
    <div id="dashboard_section" className="dashboard_section main_section">
      <div className="row">
        <Card
          currentValue={7}
          desc="سبد های خرید مانده امروز"
          title="سبد خرید امروز"
          icon="fas fa-shopping-basket"
          lastWeekValue={13}
          lastMonthValue={18}
        />
        <Card
          currentValue={5}
          desc="سفارشات معلق و فاقد پرداختی"
          title="سفارشات مانده امروز"
          icon="fas fa-dolly"
          lastWeekValue={9}
          lastMonthValue={16}
        />
        <Card
          currentValue={45}
          desc="سفارشات کامل و دارای پرداختی"
          title="سفارشات امروز"
          icon="fas fa-luggage-cart"
          lastWeekValue={263}
          lastMonthValue={1038}
        />

        <Card
          currentValue="1,500,000"
          desc="جمع مبالغ پرداختی (تومان)"
          title="درآمد امروز"
          icon="fas fa-money-check-alt"
          lastWeekValue="6,380,000"
          lastMonthValue="22,480,000"
        />
      </div>

      <ProductTable />
    </div>
  );
};

export default Dashboard;
