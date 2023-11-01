import AwsCard from "../components/AwsCard/AwsCard";
import Header from "../components/Header";
import { awsMachines } from "../utils/constants";

const Home = () => {
  return (
    <div className="bg-gradient-to-tr p-4 min-h-screen text-white flex flex-col  from-cyan-700 to-blue-700 space-y-8">
      <Header />
      <div className="max-w-[1500px] p-4 m-auto w-full  gap-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {awsMachines.map((item, idx) => (
          <AwsCard
            descripiton={item.description}
            machineName={item.machineName}
            region={item.region}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
